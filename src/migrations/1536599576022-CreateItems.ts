import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const TABLE_NAME = 'items';

export class CreateItems1536599576022 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: TABLE_NAME,
      columns: [
        {
          name: 'id',
          type: 'varchar',
          length: '36',
          isPrimary: true,
          generationStrategy: 'uuid',
        },
        {
          name: 'name',
          type: 'varchar',
          length: '128',
          isNullable: false,
          isUnique: true,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(TABLE_NAME);
  }

}
