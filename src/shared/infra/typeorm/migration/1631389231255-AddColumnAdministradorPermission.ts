import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnAdministradorPermission1631389231255 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("administrador", new TableColumn({
            name: "permission",
            type: "boolean"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("administradoor", "permission");
    }

}
