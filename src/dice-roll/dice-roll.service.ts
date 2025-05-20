import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDiceRollDto } from './dto/create-dice-roll.dto';

@Injectable()
export class DiceRollService {
    constructor(private prisma: PrismaService) {}

    async rollDice(dto: CreateDiceRollDto) {
        const result = Math.floor(Math.random() * dto.sides) + 1;
        return this.prisma.diceRoll.create({
            data: {
                sides: dto.sides,
                result,
            },
        });
    }

    getHistory() {
        return this.prisma.diceRoll.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
}
