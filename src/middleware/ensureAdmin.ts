import {Request, Response, NextFunction} from "express"
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"

export async function ensureAdmin (req: Request, res: Response, next: NextFunction) {
    const {user_id} = req

    const userRepo = getCustomRepository(UserRepository)
    const { admin } = await userRepo.findOne(user_id)


    if (admin) return next()

    return res.status(401).json({
        error: "Not Allowed to create a Tag"
    })
}