import {Tag} from '@/entity';
import {DeleteResult, getRepository, InsertResult, Repository} from 'typeorm';

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

  public async queryAll():Promise<Tag>{
    const allTag = await this.TagRepo.query(`SELECT * FROM tag`);
    return allTag;
  }

  public async save(name:string,id?:number):Promise<Tag>{
    const entity = this.TagRepo.create({
      tag_Id : id,
      name:name,
    });
    return await this.TagRepo.save(entity);
  }

  public async delete(id:number): Promise<any>{
    const result= await this.TagRepo.delete(id);
    return result;
  }

}
