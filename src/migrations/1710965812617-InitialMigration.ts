import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1710965812617 implements MigrationInterface {
    name = 'InitialMigration1710965812617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "foods" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "weight" integer NOT NULL, "side" character varying NOT NULL DEFAULT '', "result" integer NOT NULL, "conclusion" character varying NOT NULL, "hipoglycemic" boolean NOT NULL, "highlight" boolean NOT NULL, "userId" uuid, CONSTRAINT "PK_0cc83421325632f61fa27a52b59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "email" character varying(45) NOT NULL, "password" character varying(120) NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "foods" ADD CONSTRAINT "FK_fce5b374ce92f14b4f650790b54" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foods" DROP CONSTRAINT "FK_fce5b374ce92f14b4f650790b54"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "foods"`);
    }

}
