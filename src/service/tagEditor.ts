import { TagInfrastructure } from "@/infrastructure";

export async function getAllTag(){
  return await TagInfrastructure.getInstance().queryAll();
}

export async function updateTagById(id:number, name:string):Promise<any> {
  return await TagInfrastructure.getInstance().save(name,id);
}

export async function addTag(name:string){
  return await TagInfrastructure.getInstance().save(name);
}

export async function deleteTag(id:number){
  return await TagInfrastructure.getInstance().delete(id);
}
