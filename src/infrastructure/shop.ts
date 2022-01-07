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
}
