import {IsNumber, IsNotEmpty, Min} from 'class-validator';

export class CreateDiceRollDto {
    @IsNumber()
    @IsNotEmpty()
    @Min(2)
    sides: number;
}
