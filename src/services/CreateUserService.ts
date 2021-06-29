import { getCustomRepository } from "typeorm";
import {UsersRepository} from "../repositories/UsersRepository";
import { hash } from "bcryptjs"


interface IUserRequest{
  name: string;
  email: string;
  cpf: string;
  password: string;
  telefone: string;
}

class CreateUserService{
  async execute({ name, email, cpf, password, telefone} : IUserRequest){
   const usersRepository = getCustomRepository(UsersRepository); 

   if(!email){
    throw new Error("Email incorrect");
   }

   const userAlreadyExist= await usersRepository.findOne({
     email,
   });

   if(userAlreadyExist){
     throw new Error("User already exist");
   }

   const passwordHash = await hash(password, 8)

   const user = usersRepository.create({
     name,
     email,
     cpf,
     password: passwordHash,
     telefone,
   });

   await usersRepository.save(user);
   return user;

  }
}

export{ CreateUserService }