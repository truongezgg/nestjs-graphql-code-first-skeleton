import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from './company.service';
import { TravelModule } from '../travel/travel.module';
import { forwardRef } from '@nestjs/common';

// npm run test apps/api/src/company/company.service.spec.ts
describe('CompanyService', () => {
  let service: CompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [forwardRef(() => TravelModule)],
      providers: [CompanyService],
    }).compile();

    service = module.get<CompanyService>(CompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Can findAll companies', () => {
    const companies = service.findAll();
    expect(companies.length).toEqual(20);
  });

  it('Can findOne companies', () => {
    const company = {
      id: 'uuid-3',
      createdAt: '2021-02-25T15:16:30.887Z',
      name: 'Blanda, Langosh and Barton',
      parentId: 'uuid-1',
    };

    const result = service.findOne(company.id);
    expect(result).toMatchObject(company);
  });
});
