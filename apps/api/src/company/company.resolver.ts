import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query(() => Company, { name: 'company' })
  findOne(@Args('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Query(() => [Company], { name: 'companies' })
  findAll() {
    return this.companyService.findAll();
  }

  @ResolveProperty('children', () => [Company], { name: 'children' })
  findChildren(@Parent() company: Company) {
    return this.companyService.findChildren(company.id);
  }
}
