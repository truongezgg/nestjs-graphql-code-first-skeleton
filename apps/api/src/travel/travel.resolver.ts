import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TravelService } from './travel.service';
import { Travel } from './entities/travel.entity';

@Resolver(() => Travel)
export class TravelResolver {
  constructor(private readonly travelService: TravelService) {}

  @Query(() => [Travel], { name: 'travels' })
  findAll() {
    return this.travelService.findAll();
  }

  @Query(() => Travel, { name: 'travel' })
  findOne(@Args('id') id: string) {
    return this.travelService.findOne(id);
  }
}
