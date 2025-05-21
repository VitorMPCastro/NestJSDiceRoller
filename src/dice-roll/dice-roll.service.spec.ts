import { DiceRollService } from './dice-roll.service';
import { PrismaService } from '../prisma/prisma.service';

describe('DiceRollService', () => {
  let service: DiceRollService;
  let prismaMock: Partial<PrismaService>;

  beforeEach(() => {
    prismaMock = {
      diceRoll: {
        create: jest.fn().mockImplementation(({ data }) => ({
          id: 1,
          ...data,
          createdAt: new Date(),
        })),
        findMany: jest.fn().mockResolvedValue([]),
      } as any,
    };

    service = new DiceRollService(prismaMock as PrismaService);
  });

  it('should roll a dice and save result', async () => {
    const sides = 6;
    const roll = await service.rollDice({ sides });

    expect(roll.sides).toBe(6);
    expect(roll.result).toBeGreaterThanOrEqual(1);
    expect(roll.result).toBeLessThanOrEqual(6);
    expect(prismaMock.diceRoll!.create).toHaveBeenCalled();
  });

  it('should return dice roll history', async () => {
    const history = await service.getHistory();

    expect(Array.isArray(history)).toBe(true);
    expect(prismaMock.diceRoll!.findMany).toHaveBeenCalled();
  });
});
