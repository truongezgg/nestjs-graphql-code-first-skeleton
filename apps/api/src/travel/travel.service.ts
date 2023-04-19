import { travels } from '@app/database/data/travels';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TravelService {
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
}
