import { Request, Response } from "express"
import { CreateTagService } from "../service/CreateTagService"

class CreateTagController {
    async handle(req: Request, res: Response) {
        const { name } = req.body

        const newTagService = new CreateTagService()

        const tag = await newTagService.execute(name)
        return res.json(name)
    }
}

export { CreateTagController }