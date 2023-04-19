import { Test, TestingModule } from '@nestjs/testing';
import { TravelResolver } from './travel.resolver';
import { TravelService } from './travel.service';

// npm run test apps/api/src/travel/travel.resolver.spec.ts
describe('TravelResolver', () => {
  let resolver: TravelResolver;
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
      providers: [TravelResolver, TravelService],
    }).compile();

    resolver = module.get<TravelResolver>(TravelResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('can findAll', () => {
    const results = resolver.findAll();
    expect(results.length).toEqual(100);
  });

  it('can findOne', () => {
    const result = resolver.findOne(travel.id);
    expect(result).toMatchObject(travel);
  });
});
