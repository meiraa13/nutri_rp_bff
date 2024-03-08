import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeEnumType1709846005672 implements MigrationInterface {
    name = 'ChangeEnumType1709846005672'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foods" DROP COLUMN "conclusion"`);
        await queryRunner.query(`DROP TYPE "public"."foods_conclusion_enum"`);
        await queryRunner.query(`ALTER TABLE "foods" ADD "conclusion" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foods" DROP COLUMN "conclusion"`);
        await queryRunner.query(`CREATE TYPE "public"."foods_conclusion_enum" AS ENUM('baixo', 'moderado', 'alto')`);
        await queryRunner.query(`ALTER TABLE "foods" ADD "conclusion" "public"."foods_conclusion_enum" NOT NULL`);
    }

}
