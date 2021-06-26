import {Request, Response} from 'express'
import { ListAllUserService } from '../service/ListAllUserService'
import { classToPlain } from "class-transformer"


class ListUsersController {
    async handle(req: Request, res: Response) {
        const { name, email, admin, password } = req.body 

        const listUserService = new ListAllUserService()
        const user = await listUserService.execute()

        return classToPlain(user)
    }
}

export { ListUsersController }