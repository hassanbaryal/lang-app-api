import { IsString, IsNotEmpty } from "class-validator";


export class CreateCardDto {
    @IsString()
    @IsNotEmpty()
    front!: string;

    @IsString()
    @IsNotEmpty()
    back!: string;
}