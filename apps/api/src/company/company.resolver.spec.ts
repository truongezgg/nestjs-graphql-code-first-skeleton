import { Test, TestingModule } from '@nestjs/testing';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from './company.service';
import { TravelModule } from '../travel/travel.module';
import { forwardRef } from '@nestjs/common';
import { Company } from './entities/company.entity';

// npm run test apps/api/src/company/company.resolver.spec.ts
describe('CompanyResolver', () => {
  let resolver: CompanyResolver;
  const company = {
    id: 'uuid-3',
    createdAt: '2021-02-25T15:16:30.887Z',
    name: 'Blanda, Langosh and Barton',
    parentId: 'uuid-1',
  };

  const children = [
    {
      id: 'uuid-5',
      createdAt: '2021-02-25T13:35:57.923Z',
      name: 'Hane - Windler',
      parentId: 'uuid-3',
    },
    {
      id: 'uuid-6',
      createdAt: '2021-02-26T01:41:06.479Z',
      name: 'Vandervort - Bechtelar',
      parentId: 'uuid-3',
    },
    {
      id: 'uuid-9',
      createdAt: '2021-02-25T16:02:49.099Z',
      name: 'Kuhic - Swift',
      parentId: 'uuid-3',
    },
    {
      id: 'uuid-17',
      createdAt: '2021-02-25T11:17:52.132Z',
      name: 'Rohan, Mayer and Haley',
      parentId: 'uuid-3',
    },
    {
      id: 'uuid-20',
      createdAt: '2021-02-26T01:51:25.421Z',
      name: 'Kunde, Armstrong and Hermann',
      parentId: 'uuid-3',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [forwardRef(() => TravelModule)],
      providers: [CompanyResolver, CompanyService],
    }).compile();

    resolver = module.get<CompanyResolver>(CompanyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('Can findOne companies', () => {
    const result = resolver.findOne(company.id);
    expect(result).toMatchObject(company);
  });

  it('Can findChildren', () => {
    const results = resolver.findChildren(company as Company);

    expect(results).toMatchObject(children);
  });
});
