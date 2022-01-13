import { Tags, Get, Route, Controller, Path, Delete, Patch, Post, Body} from "tsoa";
import {editShopDTO, removeTagFromShopDTO,deleteShopDTO, queryDTO} from '@/entity/DTO';
import {intersectionQuery, find, unionQuery} from '@/service'

@Tags('finder')
@Route('finder')
export class findr extends Controller{
  @Post('intersectionQuery')
  public async intersectionQuery(
    @Body() form:queryDTO
  ):Promise<any>{
    const {tag_id} = form;
    return await intersectionQuery(tag_id);
  }
}
