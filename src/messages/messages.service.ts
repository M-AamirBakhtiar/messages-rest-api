import { Injectable } from '@nestjs/common';

import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messagesRepository: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  create(createMessageDto: CreateMessageDto) {
    return this.messagesRepository.create(createMessageDto);
  }
}
