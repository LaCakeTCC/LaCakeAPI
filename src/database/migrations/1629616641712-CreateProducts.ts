import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1629616641712 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name:"products",
            columns:[
                {
                  name:"nameproduto",
                  type:"varchar",
                  isPrimary:true
                },
                {
                    name:"imagem",
                    type:"varchar",
                    isNullable:false
                  },
                  {
                    name:"description",
                    type:"varchar",
                    isNullable:false
                  },
                  {
                    name:"disponibilidade",
                    type:"varchar",
                    isNullable:false
                  },
                  {
                    name:"preco",
                    type:"varchar",
                    isNullable:false
                  },
                  {
                    name:"unidade",
                    type:"varchar",
                    isNullable:false
                  },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("products")
    }

}
