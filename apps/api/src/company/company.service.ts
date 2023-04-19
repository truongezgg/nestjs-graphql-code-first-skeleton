import { Injectable } from '@nestjs/common';
import { companies } from '@app/database/data/companies';
import { travels } from '@app/database/data/travels';
import { TravelService } from '../travel/travel.service';

@Injectable()
export class CompanyService {
  constructor(private readonly travelService: TravelService) {}

  findAll() {
    return companies.map((item) => ({
      ...item,
      cost: this.travelService.calculateCost(item.id),
    }));
  }

  findOne(id: string) {
    const company = companies.find((item) => item.id === id);
    if (!company) return;

    return { ...company, cost: this.travelService.calculateCost(company.id) };
  }

  findChildren(parentId: string) {
    const children = companies.filter((item) => item.parentId === parentId);

    return children.map((item) => ({
      ...item,
      cost: this.travelService.calculateCost(item.id),
    }));
  }
}
