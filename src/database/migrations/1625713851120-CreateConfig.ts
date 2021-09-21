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
                    isNullable: true
                },
                {
                    name:"editbio",
                    type:"varchar",
                    isNullable: true
                },
                {
                    name:"cep",
                    type:"varchar",
                    isNullable: true
                },
                {
                    name:"uf",
                    type:"varchar",
                    isNullable:  true
                },
                {
                    name:"cidade",
                    type:"varchar",
                    isNullable: true
                },
                {
                    name:"logradouro",
                    type:"varchar",
                    isNullable: true
                },
                {
                    name:"bairro",
                    type:"varchar",
                    isNullable: true
                },
                {
                    name:"numero",
                    type:"varchar",
                    isNullable: true
                },
                {
                    name:"complemento",
                    type:"varchar",
                    isNullable: true
                },
                {
                   name:"userId",
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