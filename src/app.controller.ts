import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Repository } from 'typeorm';
import { Card } from './cards/cards.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(Card)
    private readonly cardRepo: Repository<Card>
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cards')
  getCards(): Promise<Card[]> {
    return this.cardRepo.find();
  }
}
