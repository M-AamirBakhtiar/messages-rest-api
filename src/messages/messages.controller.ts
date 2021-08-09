import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'Hello';
  }

  @Get(':id')
  getMessage(@Param('id') id: number) {
    console.log(id);
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }
}
