import { Request, Response} from "express"
import { CreateUserService } from "../services/CreateUserService";
import { CreateConfigService } from "../services/CreateConfigService";


class CreateUserController{
  async handle(request: Request, response: Response ){
      const{ name, email, cpf, password, telefone, dataNascimento}= request.body;

      const createUserService = new CreateUserService();
      
      const user = await createUserService.execute({name, email, cpf, password, telefone, dataNascimento});

      const createConfigService = new CreateConfigService();

      await createConfigService.execute
    
      return response.json(user)
  }
}

export {CreateUserController}