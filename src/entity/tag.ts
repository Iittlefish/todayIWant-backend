import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tag{
    @PrimaryGeneratedColumn('increment', {
        type: 'int',
        unsigned: true,
      })
    tagId : Number;
    @Column({
        type: 'varchar',
        collation: 'utf8_unicode_ci',
        default: 'NULL',
    })
    name : String;

    constructor(param : Tag={} as Tag){
        const {
            tagId,
            name,
        } = param;

        this.tagId = tagId;
        this.name = name;
    }
}
