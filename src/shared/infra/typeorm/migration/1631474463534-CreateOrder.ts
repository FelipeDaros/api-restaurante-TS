import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateOrder1631474463534 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "orders",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "client_id",
                    type: "uuid",
                    isNullable: true
                },
                {
                    name: "plate_id",
                    type: "uuid",
                    isNullable: true
                },
                {
                    name: "price_total",
                    type: "integer"
                },
                {
                    name: "estimated_time",
                    type: "integer"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            
        })),
            await queryRunner.createForeignKey("orders", new TableForeignKey({
                columnNames: ["client_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "clients",
                onDelete: "RESTRICT"
            })),
            await queryRunner.createForeignKey("orders", new TableForeignKey({
                columnNames: ["plate_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "plates",
                onDelete: "RESTRICT"
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {;
        await queryRunner.dropTable("orders")
        await queryRunner.dropForeignKey("user_id", "orders");
        await queryRunner.dropForeignKey("plate_id", "orders");
    }

}
