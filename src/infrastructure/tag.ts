import {Tag} from '@/entity';
import {getRepository, InsertResult, Repository} from 'typeorm';

export class TagInfrastructure{
  private static INSTANCE : TagInfrastructure;
  private TagRepo:Repository<Tag>;

  public static Init(){
    if(this.INSTANCE===undefined){
      this.INSTANCE=new TagInfrastructure();
    }
    return TagInfrastructure;
  }

  public static getInstance(){
    return this.INSTANCE;
  }

  constructor(){
    this.TagRepo = getRepository(Tag);
  }

  public testRoute():Promise<InsertResult>{
    const entity = this.TagRepo.create({
      name:'testRoute',
    });
    return this.TagRepo.insert(entity);
  }

}
