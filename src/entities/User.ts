import { Entity, PrimaryColumn, Column, Timestamp } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  password: string;

  @Column()
  telefone: string;

  @Column()
  dataNascimento: Date;
 

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}


export { User };
