import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../repositories/ComplimentRepository"
import { UserRepository } from "../repositories/UserRepository"


interface IComplimentRequest {
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}

class CreateComplimentService {
    async execute( { tag_id, user_sender, user_receiver, message }: IComplimentRequest ) {
        const complimentRepo = getCustomRepository(ComplimentRepository)
        const userRepo = getCustomRepository(UserRepository)

        if (user_sender === user_receiver) {throw new Error("Cannot send a compliment to yourself")}

        const userReceiverExists = await userRepo.findOne(user_receiver)

        if (!userReceiverExists){ throw new Error("User Receiver does not exists!!")}

        const compliment = complimentRepo.create({
            message,
            tag_id,
            user_sender,
            user_receiver,
        })

        await complimentRepo.save(compliment)

        return compliment
    }
}

export {CreateComplimentService}