import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { TravelService } from '../travel/travel.service';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(
    private readonly travelService: TravelService,
    private readonly companyService: CompanyService,
  ) {}

  @Query(() => Company, { name: 'company' })
  findOne(@Args('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Query(() => [Company], { name: 'companies' })
  findAll() {
    return this.companyService.findAll();
  }

  @ResolveField('children', () => [Company], { name: 'children' })
  findChildren(@Parent() company: Company) {
    return this.companyService.findChildren(company.id);
  }

  @ResolveField('cost', () => Number, { name: 'cost' })
  calcCost(@Parent() company: Company) {
    return this.travelService.calculateCompanyTotalCost(company.id);
  }
}
