import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"

class ListAllUserService {
    async execute() {
        const userRepo = getCustomRepository(UserRepository)
        const users = await userRepo.find()

        return users
    } 
}

export {ListAllUserService}