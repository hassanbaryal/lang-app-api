import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Repository } from 'typeorm';
import { Card } from './cards/entities/card.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCardDto } from './cards/dto/create-card.dto';

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
  
  //@Body pulls out the JSON body out of the request, Validates it against CreateCardDto automatically.
  @Post('cards')
  createCard(@Body() dto: CreateCardDto): Promise<Card> {
    const card = this.cardRepo.create(dto);
    return this.cardRepo.save(card);
  }
}
