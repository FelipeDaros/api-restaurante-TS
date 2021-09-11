import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePlate1630915843462 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "plates",
            columns: [
                {
                    name: "id",
                    type: "uuid"
                },
                {
                    name: "name_plate",
                    type: "varchar"
                },
                {
                    name: "price",
                    type: "integer"
                },
                {
                    name: "photo_plate",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("plates")
    }

}
