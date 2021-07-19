import{ Request, Response} from "express"
import { GetUserService } from "../services/GetUserService"
import jwt from "jsonwebtoken"


class AuthenticateUserController{
  async handle(request: Request, response: Response){
  const {email}= request.body;

    const getUserService = new GetUserService();

    const user = await getUserService.execute({email});


    const token = await jwt.sign({user}, "secret")

    return response.json({user, token})
  }
}
  

export {AuthenticateUserController}