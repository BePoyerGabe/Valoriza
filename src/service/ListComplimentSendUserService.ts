import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../repositories/ComplimentRepository"

class ListComplimentSendUserService {
    async execute(user_id: string)  {
        const complimentsRepo = getCustomRepository(ComplimentRepository)

        const compliments = await complimentsRepo.find({
            where: {
                user_sender: user_id
            }
        })

        return compliments
    }
}

export {ListComplimentSendUserService}