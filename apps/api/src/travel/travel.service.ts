import { travels } from '@app/database/data/travels';
import { Injectable } from '@nestjs/common';
import { CompanyService } from '../company/company.service';

@Injectable()
export class TravelService {
  constructor(private readonly companyService: CompanyService) {}

  findAll() {
    return travels;
  }

  findOne(id: string) {
    return travels.find((item) => item.id === id);
  }

  calculateCost(companyId: string) {
    const travelList = travels.filter((item) => item.companyId === companyId);

    return travelList.reduce((acc, cur) => {
      acc += Number(cur.price) || 0;
      return acc;
    }, 0);
  }

  calculateCompanyTotalCost(companyId: string) {
    const childrenIds = this.companyService.findChildrenIds({ id: companyId });

    return [companyId, ...childrenIds].reduce((totalCost, companyId) => {
      return totalCost + this.calculateCost(companyId);
    }, 0);
  }
}
