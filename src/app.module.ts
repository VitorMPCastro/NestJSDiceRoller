import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiceRollModule } from './dice-roll/dice-roll.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [DiceRollModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
