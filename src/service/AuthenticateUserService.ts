import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
interface IAuthenticateRequest {
    email: string,
    password: string
}

class AuthenticateUserService {
    async execute({ email, password}: IAuthenticateRequest) {
        const userRepository = getCustomRepository(UserRepository)

        const user = await userRepository.findOne({email})

        if(!user) throw new Error("Email/Password incorrect")

        const isMatch = await compare(password, user.password)

        if (!isMatch) throw new Error("Email/Password incorrect")

        //Gerar um token
        const token = sign({
            email: user.email,     
        }, "29a961728d5eece152a734c05b8d3b0f", {
            subject: user.id,
            expiresIn: "1d"
        } )

        return token
    }
}

export {AuthenticateUserService}