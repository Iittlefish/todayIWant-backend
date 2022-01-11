import { Tags, Get, Route, Controller, Path } from "tsoa";
import { TagInfrastructure } from "@/infrastructure";

@Tags('test')
@Route('test')
export class TestRoute extends Controller{
  @Get('routeForTest')
  public async testRoute(){
    TagInfrastructure.getInstance().testRoute();
  }
}
