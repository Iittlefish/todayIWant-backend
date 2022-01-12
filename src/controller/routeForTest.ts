import { Tags, Get, Route, Controller, Path } from "tsoa";
import { TagInfrastructure } from "@/infrastructure";
import { Tag } from "@/entity";

@Tags('test')
@Route('test')
export class TestRoute extends Controller{
  @Get('routeForTest')
  public async testRoute():Promise<any>{
    const result = await TagInfrastructure.getInstance().queryAll();
    console.log(typeof(result));
    return result;
  }
}
