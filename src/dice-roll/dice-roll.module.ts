import { Module } from '@nestjs/common';
import { DiceRollService } from './dice-roll.service';
import { DiceRollResolver } from './dice-roll.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DiceRollService, DiceRollResolver],
})
export class DiceRollModule {}
