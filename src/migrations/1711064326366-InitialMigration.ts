import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1711064326366 implements MigrationInterface {
    name = 'InitialMigration1711064326366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foods" ADD "weight_side" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foods" DROP COLUMN "weight_side"`);
    }

}
