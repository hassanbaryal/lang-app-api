import { PartialType } from '@nestjs/mapped-types';
import { CreateCardDto } from './create-card.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCardDto extends PartialType(CreateCardDto) {
    @IsNumber()
    Id!: number;
}
