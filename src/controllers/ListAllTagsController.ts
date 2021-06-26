import { Request, Response } from "express";
import { ListAllTagsService } from "../service/ListAllTagsService";

class ListAllTagsController {
    async handle(req: Request, res: Response) {
        const listTagsSevice = new ListAllTagsService()

        const tags = await listTagsSevice.execute()
        return res.json(tags)
    }
}

export {ListAllTagsController}