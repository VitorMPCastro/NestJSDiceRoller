import { Body, Controller, Get, Post } from '@nestjs/common';
import { DiceRollService } from './dice-roll.service';
import { CreateDiceRollDto } from './dto/create-dice-roll.dto';

@Controller('dice-rolls')
export class DiceRollController {
    constructor(private readonly diceRollService: DiceRollService) {}

    @Post()
    roll(@Body() dto: CreateDiceRollDto) {
        return this.diceRollService.rollDice(dto);
    }

    @Get()
    history() {
        return this.diceRollService.getHistory();
    }
}
