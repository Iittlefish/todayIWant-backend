import { Tags, Get, Route, Controller, Path, Delete, Patch, Post, Body } from "tsoa";
import * as tagEditor from '@/service/tagEditor';
import { addTagDTO, updateTagDTO } from '@/entity/DTO';

@Tags('tagEditor')
@Route('tagEditor')
export class TagEditor extends Controller{
  @Get('getAllTag')
  public async getAllTag():Promise<any>{
    return tagEditor.getAllTag();
  }

  @Delete('id/{id}')
  public async deleteTag(
    @Path() id: number
  ):Promise<any>{
    return tagEditor.deleteTag(id);
  }

  @Patch('id/{id}')
  public async updateTag(
    @Path('id') id:number,
    @Body() form:updateTagDTO,
    ):Promise<any>{
      const {name} = form;
    return tagEditor.updateTagById(id,name);
  }

  @Post()
  public async addTag(
    @Body() form:addTagDTO,
  ):Promise<any>{
    const {name} = form;
    return tagEditor.addTag(name);
  }

}
