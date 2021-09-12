import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnEmailClient1631416368140 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("clients", new TableColumn({
            name: "email",
            type: "varchar"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("clients", "email");
    }

}
