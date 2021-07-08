import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4  } from "uuid";


@Entity("configs")
class Config {
  @PrimaryColumn()
  id: string;

  @Column()
  nomeloja: string;

  @Column()
  editbio: string;

  @Column()
  cep: string;

  @Column()
  cidade: string;

  @Column()
  logradouro: string;
  
  @Column()
  bairro: string;
  
  @Column()
  numero: string;

  @Column()
  complemento: string;

  constructor() {
    this.id = v4();
  }

}

  export { Config };