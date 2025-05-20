import { Module } from '@nestjs/common';
import { DiceRollController } from './dice-roll.controller';
import { DiceRollService } from './dice-roll.service';

@Module({
  controllers: [DiceRollController],
  providers: [DiceRollService]
})
export class DiceRollModule {}
