import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Shop{
    @PrimaryGeneratedColumn('increment', {
        type: 'int',
        unsigned: true,
    })
    shop_id : number;
    @Column({
        type: 'text',
        collation: 'utf8_unicode_ci',
        default: 'NULL',
    })
    name : string;
    @Column('int', {
        unsigned: true,
    })
    tag_id : number;

    constructor(param : Shop ={} as Shop){
        const {
            shop_id,
            name,
            tag_id,
        } = param;
        this.shop_id = shop_id;
        this.name= name;
        this.tag_id = tag_id;
     }
}
