import { Test, TestingModule } from '@nestjs/testing';
import { TypeCongeService } from './type-conge.service';

describe('TypeCongeService', () => {
  let service: TypeCongeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeCongeService],
    }).compile();

    service = module.get<TypeCongeService>(TypeCongeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
