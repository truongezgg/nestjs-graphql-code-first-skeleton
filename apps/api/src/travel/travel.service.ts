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
}
