import { Injectable } from '@nestjs/common';
import { companies } from '@app/database/data/companies';
import { travels } from '@app/database/data/travels';

@Injectable()
export class CompanyService {
  findAll() {
    return companies.map((item) => ({
      ...item,
      cost: this.calculateCost(item.id),
    }));
  }

  findOne(id: string) {
    const company = companies.find((item) => item.id === id);
    if (!company) return;

    return { ...company, cost: this.calculateCost(company.id) };
  }

  findChildren(parentId: string) {
    const children = companies.filter((item) => item.parentId === parentId);

    return children.map((item) => ({
      ...item,
      cost: this.calculateCost(item.id),
    }));
  }

  calculateCost(companyId: string) {
    const travelList = travels.filter((item) => item.companyId === companyId);

    return travelList.reduce((acc, cur) => {
      acc += Number(cur.price) || 0;
      return acc;
    }, 0);
  }
}
