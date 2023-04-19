import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field()
  id: string;

  @Field()
  createdAt: string;

  @Field()
  name: string;

  @Field()
  parentId: string;

  @Field()
  cost: number;

  @Field(() => [Company], { defaultValue: [] })
  children?: Company[];
}
