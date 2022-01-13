import {Shop} from '@/entity';
import {getRepository, Repository} from 'typeorm';

export class ShopInfrastructure{
  private static INSTANCE : ShopInfrastructure;
  private shopRepo:Repository<Shop>;

  public static Init(){
    if(this.INSTANCE===undefined){
      this.INSTANCE=new ShopInfrastructure();
    }
    return ShopInfrastructure;
  }

  public static getInstance(){
    return this.INSTANCE;
  }

  constructor(){
    this.shopRepo = getRepository(Shop);
  }

  public async queryAll():Promise<Shop>{
    const allTag = await this.shopRepo.query(`SELECT * FROM shop`);
    return allTag;
  }

  public async create(name:string,tagId:number):Promise<Shop>{
    return  this.shopRepo.create({
      name:name,
      tag_id:tagId,
    })
  }

  public async add(entity:Array<Shop>){
    return await this.shopRepo.save(entity);
  }

  public async delete(id:number): Promise<any>{
    const result= await this.shopRepo.delete(id);
    return result;
  }

  public async deleteByCondition(condition:object):Promise<any>{
    return await this.shopRepo.delete(condition);
  }
}
