import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1614603895761 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "idf"."social_security_numbers";
            CREATE TABLE "idf"."social_security_numbers" (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                first_eight TEXT NOT NULL,
                CONSTRAINT first_eight CHECK (first_eight ~ '^[0-9]{8}$'),
                last_digit INT NOT NULL,
                CONSTRAINT last_digit CHECK (last_digit BETWEEN 0 AND 9),
                total_id TEXT NOT NULL,
                CONSTRAINT total_id CHECK (total_id ~ '^[0-9]{9}$'),
                UNIQUE(id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "idf"."social_security_numbers";`);
    }
}
