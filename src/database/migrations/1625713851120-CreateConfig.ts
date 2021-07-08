import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateConfig1625713851120 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name:"configs",
            columns:[
                {
                    name:"id",
                    type:"varchar",
                    isPrimary: true
                },
                {
                    name:"nomeloja",
                    type:"varchar",
                    isNullable: false
                },
                {
                    name:"editbio",
                    type:"varchar",
                    isNullable: false
                },
                {
                    name:"cep",
                    type:"varchar",
                    isNullable: false
                },
                {
                    name:"cidade",
                    type:"varchar",
                    isNullable: false
                },
                {
                    name:"logradouro",
                    type:"varchar",
                    isNullable: false
                },
                {
                    name:"bairro",
                    type:"varchar",
                    isNullable: false
                },
                {
                    name:"numero",
                    type:"varchar",
                    isNullable: false
                },
                {
                    name:"complemento",
                    type:"varchar",
                    isNullable: false
                }
                
            ]
        }))
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("configs");
    }

}