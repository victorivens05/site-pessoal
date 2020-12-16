import { Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello (): string {
    return this.appService.getHello()
  }
  @Get('/api')
  getHello2 () {
    return { 'hello': 'world' }
  }

  @Get('/api/:id')
  getHelloId (@Param('id') id) {
    return { hello: 'world', 'id': id, version: '1.1' }
  }
}
