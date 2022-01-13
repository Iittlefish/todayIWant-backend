import { Tags, Get, Route, Controller, Path, Delete, Patch, Post, Body } from "tsoa";
import {editShopDTO, removeTagFromShopDTO,deleteShopDTO} from '@/entity/DTO';
import {add, removeTagFromShop, deleteShop} from '@/service'

@Tags('shopEditor')
@Route('shopEditor')
export class shopEditor extends Controller{
  @Post('newShop')
  public async newShop(
    @Body() form:editShopDTO
  ):Promise<any>{
    const {
      name,
      tag,
    }=form;
    return await add(name,tag);
  }

  @Post('addTagToShop')
  public async newTag(
    @Body() from:editShopDTO
  ):Promise<any>{
    const {
      name,
      tag,
    }=from;
    return await add(name,tag);
  }

  @Delete('removeTagFromShop')
  public async removeTagFromShop(
    @Body() form : removeTagFromShopDTO
  ):Promise<any>{
    const {
      name,
      tag,
    } = form;
    await removeTagFromShop(name,tag);
  }

  @Delete('deleteShop')
  public async deleteShop(
    @Body() form:deleteShopDTO
  ):Promise<any>{
    const { name } = form;
    return await deleteShop(name);
  }

}
