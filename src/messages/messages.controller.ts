import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

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
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    console.log(createMessageDto);
  }
}
