import { Request, Response } from "express";
import { ListComplimentSendUserService } from "../service/ListComplimentSendUserService";

class ListComplimentSendUserController {
    async handle(req: Request, res: Response) {
        const listComplimentSenUserService = new ListComplimentSendUserService()

        const compliments = await listComplimentSenUserService.execute(req.user_id)

        return res.json(compliments)
    }
}

export { ListComplimentSendUserController }