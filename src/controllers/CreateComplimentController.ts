import { Request, response, Response } from "express";
import { CreateComplimentService } from "../service/CreateComplimentService";

class CreateComplimentController {
    async handle(req: Request, res: Response,) {
        const { tag_id,  user_receiver, message } = req.body
        const { user_id } = req

        const createComplimentService = new CreateComplimentService()

        const compliment = await createComplimentService.execute({
            tag_id, 
            user_sender: user_id, 
            user_receiver, 
            message
        })
        
        return response.json(compliment)
    }
}

export {CreateComplimentController}