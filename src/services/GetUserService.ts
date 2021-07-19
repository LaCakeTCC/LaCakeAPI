import { getCustomRepository } from "typeorm";
import {UserRepository} from "../repositories/UserRepository";
import { hash } from "bcryptjs"



class GetUserService{
 async execute(email){
 
  const usersRepository = getCustomRepository(UserRepository); 

  const user = await usersRepository.findOne({email});

  if(!user){
    throw new Error ("user dont exists");
  }

  return user;

 }

}

export {GetUserService}