import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602627668766 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      // Realiza alterações

      await queryRunner.createTable(new Table({
        name:"orphanages",
        columns:[
          {name:"id", type:"integer", unsigned:true, isPrimary:true, isGenerated:true, generationStrategy:"increment"},
          {name:"name", type:"varchar"},
          {name:"latitude", type:"decimal", scale:10, precision:2},
          {name:"longitude", type:"decimal", scale:10, precision:2},
          {name:"about", type:"text"},
          {name:"instructions", type:"text"}, // instruções de acesso ao orfanato
          {name:"opening_hours", type:"varchar"}, // instruções de acesso ao orfanato
          {name:"open_on_weekends", type:"boolean", default:false} // se é aberto aos finais de semana
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      //Desfaz o metodo up
      await queryRunner.dropTable("orphanages");
    }
}
