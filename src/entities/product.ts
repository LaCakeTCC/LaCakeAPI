import { Entity, PrimaryColumn, Column } from "typeorm";



@Entity("products")
class Product{
  @PrimaryColumn()
  nameproduto: string;

  @Column()
  imagem: string;

  @Column()
  description: string;

  @Column()
  disponibilidade: string;

  @Column()
  preco: string;

  @Column()
  unidade: string;
}



export {Product};