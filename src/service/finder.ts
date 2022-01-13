import { ShopInfrastructure, TagInfrastructure } from "@/infrastructure";

export async function find(tag:number){
  return await ShopInfrastructure.getInstance().find({
    tag_id:tag,
  })
}

export async function intersectionQuery(tag:Array<number>){
  let sql:string=`SELECT * FROM shop WHERE `;
  sql += 'tag_id = ' + tag[0];
  for(let i=1;i<tag.length;i++){
    sql += ' or tag_id =' + tag[i];
  }
  return ShopInfrastructure.getInstance().query(sql);
}

export async function unionQuery(tag:Array<number>){}

export async function diffQuery(tag:Array<number>){}
