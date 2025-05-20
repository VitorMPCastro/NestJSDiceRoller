import { Test, TestingModule } from '@nestjs/testing';
import { DiceRollController } from './dice-roll.controller';

describe('DiceRollController', () => {
  let controller: DiceRollController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiceRollController],
    }).compile();

    controller = module.get<DiceRollController>(DiceRollController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
