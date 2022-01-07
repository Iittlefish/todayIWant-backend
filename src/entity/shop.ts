import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Shop{
    @PrimaryGeneratedColumn('increment', {
        type: 'int',
        unsigned: true,
    })
    shopId : number;
    @Column({
        type: 'text',
        collation: 'utf8_unicode_ci',
        default: 'NULL',
    })
    shopName : string;
    @Column('int', {
        unsigned: true,
    })
    tagId : number;

    constructor(param : Shop ={} as Shop){
        const {
            shopId,
            shopName,
            tagId,
        } = param;
        this.shopId = shopId;
        this.shopName= shopName;
        this.tagId = tagId;
     }
}
