import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, IsNotEmpty, Min } from 'class-validator';

@InputType()
export class CreateDiceRollDto {
    @Field(() => Int)
    @IsNumber()
    @IsNotEmpty()
    @Min(2)
    sides: number;
}
