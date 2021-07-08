import { getCustomRepository } from "typeorm";
import { ConfigRepository } from "../repositories/ConfigRepository";


interface ConfigInterface{
  nomeloja: string;
  editbio: string;
  cep: string;
  cidade: string;
  logradouro: string;
  bairro: string;
  numero: string;
  complemento: string;
}

class CreateConfigService{
  async execute({ 
    nomeloja,
    editbio,
    cep,
    cidade,
    logradouro,
    bairro,
    numero,
    complemento
  }:ConfigInterface)
  {
    const configRepository = getCustomRepository(ConfigRepository);

    const hasName = await configRepository.findOne({ nomeloja,});

    if (hasName) {
      throw new Error("loja already exists");
    }

    const config = configRepository.create({
    nomeloja,
    editbio,
    cep,
    cidade,
    logradouro,
    bairro,
    numero,
    complemento
    });

    await configRepository.save(config);
    return config;
  }
}

export { CreateConfigService }