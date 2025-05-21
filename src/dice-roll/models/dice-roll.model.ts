import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DiceRoll {
    @Field(() => Int)
    id: number;

    @Field(() => Int)
    sides: number;

    @Field(() => Int)
    result: number;

    @Field()
    createdAt: Date;
}
