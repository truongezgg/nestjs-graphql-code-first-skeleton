import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Travel {
  @Field({ description: 'Example field (placeholder)' })
  id: 'uuid-t1';

  @Field({ description: 'Example field (placeholder)' })
  createdAt: '2020-08-27T00:22:26.927Z';

  @Field({ description: 'Example field (placeholder)' })
  employeeName: 'Garry Schuppe';

  @Field({ description: 'Example field (placeholder)' })
  departure: 'Saint Kitts and Nevis';

  @Field({ description: 'Example field (placeholder)' })
  destination: 'Pitcairn Islands';

  @Field({ description: 'Example field (placeholder)' })
  price: '362.00';

  @Field({ description: 'Example field (placeholder)' })
  companyId: 'uuid-1';
}
