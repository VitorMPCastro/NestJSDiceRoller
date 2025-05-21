import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DiceRollService } from './dice-roll.service';
import { DiceRoll } from './models/dice-roll.model';
import { CreateDiceRollDto } from './dto/create-dice-roll.dto';

@Resolver(() => DiceRoll)
export class DiceRollResolver {
    constructor(private readonly diceRollService: DiceRollService) {}

    @Mutation(() => DiceRoll)
    rollDice(@Args('input') input: CreateDiceRollDto) {
        return this.diceRollService.rollDice(input);
    }

    @Query(() => [DiceRoll])
    diceRollHistory() {
        return this.diceRollService.getHistory();
    }
}
