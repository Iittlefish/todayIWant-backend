import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tag{
    @PrimaryGeneratedColumn('increment')
    tag_Id : Number;
    @Column({
        type: 'varchar',
        collation: 'utf8_unicode_ci',
        default: 'NULL',
    })
    name : String;

    constructor(param : Tag={} as Tag){
        const {
            tag_Id,
            name,
        } = param;

        this.tag_Id = tag_Id;
        this.name = name;
    }
}
