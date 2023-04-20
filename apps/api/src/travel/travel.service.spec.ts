import { Test, TestingModule } from '@nestjs/testing';
import { TravelService } from './travel.service';
import { forwardRef } from '@nestjs/common';
import { CompanyModule } from '../company/company.module';

// npm run test apps/api/src/travel/travel.service.spec.ts
describe('TravelService', () => {
  let service: TravelService;

  const travel = {
    id: 'uuid-t1',
    createdAt: '2020-08-27T00:22:26.927Z',
    employeeName: 'Garry Schuppe',
    departure: 'Saint Kitts and Nevis',
    destination: 'Pitcairn Islands',
    price: '362.00',
    companyId: 'uuid-1',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [forwardRef(() => CompanyModule)],
      providers: [TravelService],
    }).compile();

    service = module.get<TravelService>(TravelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('can findAll', () => {
    const results = service.findAll();
    expect(results.length).toEqual(100);
  });

  it('can findOne', () => {
    const result = service.findOne(travel.id);

    expect(result).toMatchObject(travel);
  });
});
