import { getCustomRepository, Timestamp } from "typeorm";
import {UserRepository} from "../repositories/UserRepository";
import { hash } from "bcryptjs"
import {validate} from "uuid";


interface IUserRequest{
  name: string;
  email: string;
  cpf: string;
  password: string;
  telefone: string;
  dataNascimento: Timestamp;
}

class CreateUserService{
  async execute({ name, email, cpf, password, telefone, dataNascimento} : IUserRequest){
   const usersRepository = getCustomRepository(UserRepository); 

   if(!email){
    throw new Error("Email incorrect");
   }

   const userAlreadyExist= await usersRepository.findOne({ email,});

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
     dataNascimento,
   });

   await usersRepository.save(user);
   return user;
  }

  async find(search: string) {
    const repository = getCustomRepository(UserRepository);

    const user = await repository.findOne(
      validate(search) ? { id: search } : { name: search }
    );

    if (!user) {
      throw new Error("User not exists");
    }

    return user;
  }
}

export{ CreateUserService }