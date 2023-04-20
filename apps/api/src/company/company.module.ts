import { Module, forwardRef } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { TravelModule } from '../travel/travel.module';

@Module({
  imports: [forwardRef(() => TravelModule)],
  providers: [CompanyResolver, CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
