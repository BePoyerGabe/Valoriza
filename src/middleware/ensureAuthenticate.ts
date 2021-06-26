import {Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken"


interface IPayload {
    sub: string
}

export function ensureAuthenticate(req: Request, res: Response, next: NextFunction) {
    //recebe token
    const authtoken = req.headers.authorization
    console.log(authtoken)

    //validar token
    if (!authtoken) return res.status(401).end()

    const [, token] = authtoken.split(" ")

    try {
        const { sub } = verify(token, "29a961728d5eece152a734c05b8d3b0f") as IPayload
        
        req.user_id = sub
        
        return next()

    } catch(err) {
        return res.status(401).end()
    }
    //Recuperar info do user pelo token


}