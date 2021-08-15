import { Injectable } from '@nestjs/common';

import { readFile, writeFile } from 'fs/promises';
import { CreateMessageDto } from './dtos/create-message.dto';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(createMessageDto: CreateMessageDto) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);
    const { content } = createMessageDto;

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
