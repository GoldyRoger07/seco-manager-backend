import { Test, TestingModule } from '@nestjs/testing';
import { EtatCivilController } from './etat-civil.controller';

describe('EtatCivilController', () => {
  let controller: EtatCivilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtatCivilController],
    }).compile();

    controller = module.get<EtatCivilController>(EtatCivilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
