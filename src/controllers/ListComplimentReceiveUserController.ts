import { Request, Response } from "express";
import { ListComplimentReceiveUserService } from "../service/ListComplimentReceiveUserService";

class ListComplimentReceiverUserController {
    async handle(req: Request, res: Response) {
        const listComplimentReceiveUserService = new ListComplimentReceiveUserService()

        const compliments = await listComplimentReceiveUserService.execute(req.user_id)

        return res.json(compliments)
    }
}

export { ListComplimentReceiverUserController }