import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../repositories/ProductRepository";



interface ProductInterface{

  nameproduto:string;
  imagem:string;
  description:string;
  disponibilidade:string;
  preco:string;
  unidade:string;

}

class CreateProductService{
  async execute({nameproduto, imagem, description, disponibilidade, preco, unidade} : ProductInterface){

    const productRepository = getCustomRepository(ProductRepository);


    const product = productRepository.create({
      nameproduto,
      imagem,
      description,
      disponibilidade,
      preco, 
      unidade
      });
  
      await productRepository.save(product);
      return product;

  }
}
export {CreateProductService}