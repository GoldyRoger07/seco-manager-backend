import { Test, TestingModule } from '@nestjs/testing';
import { EtatCivilService } from './etat-civil.service';

describe('EtatCivilService', () => {
  let service: EtatCivilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtatCivilService],
    }).compile();

    service = module.get<EtatCivilService>(EtatCivilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
