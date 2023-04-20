import { Injectable } from '@nestjs/common';
import { companies } from '@app/database/data/companies';

@Injectable()
export class CompanyService {
  findAll() {
    return companies;
  }

  findOne(id: string) {
    const company = companies.find((item) => item.id === id);
    return company;
  }

  findChildren(parentId: string) {
    return companies.filter((item) => item.parentId === parentId);
  }

  findChildrenIds(
    company: { id: string; [key: string]: unknown },
    _childrenIds?: string[],
  ) {
    const childrenIds = _childrenIds || [];

    const data = companies.filter((item) => item.parentId === company.id);
    childrenIds.push(...data.map((item) => item.id));

    data.forEach((item) => this.findChildrenIds(item, childrenIds));

    return childrenIds;
  }
}
