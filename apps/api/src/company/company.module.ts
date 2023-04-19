import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { TravelModule } from '../travel/travel.module';

@Module({
  imports: [TravelModule],
  providers: [CompanyResolver, CompanyService],
})
export class CompanyModule {}
