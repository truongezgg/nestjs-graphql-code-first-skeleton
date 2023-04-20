import { Module, forwardRef } from '@nestjs/common';
import { TravelService } from './travel.service';
import { TravelResolver } from './travel.resolver';
import { CompanyModule } from '../company/company.module';

@Module({
  imports: [forwardRef(() => CompanyModule)],
  providers: [TravelResolver, TravelService],
  exports: [TravelService],
})
export class TravelModule {}
