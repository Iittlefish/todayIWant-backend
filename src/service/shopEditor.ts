import { Shop } from "@/entity";
import { ShopInfrastructure } from "@/infrastructure";

export async function add(name:string,tag:Array<number>){
  let temp:Array<Shop> =[];
  for(let i=0;i<tag.length;i++){
    temp.push(await ShopInfrastructure.getInstance().create(name, tag[i]));
  }
  return await ShopInfrastructure.getInstance().add(temp);
};

export async function removeTagFromShop(name:string,tagId:number){
  return await ShopInfrastructure.getInstance().deleteByCondition({
    name:name,
    tag_id:tagId,
  });
};

export async function deleteShop(name:string){
  return await ShopInfrastructure.getInstance().deleteByCondition({
    name:name,
  });
};
