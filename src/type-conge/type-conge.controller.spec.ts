import { Test, TestingModule } from '@nestjs/testing';
import { TypeCongeController } from './type-conge.controller';

describe('TypeCongeController', () => {
  let controller: TypeCongeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeCongeController],
    }).compile();

    controller = module.get<TypeCongeController>(TypeCongeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
