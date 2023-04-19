import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) companies', async () => {
    const result = await request(app.getHttpServer()).post('/graphql').send({
      query:
        '{ companies { id createdAt name parentId cost children { id createdAt name parentId cost children { id createdAt name parentId cost children { id createdAt name parentId cost } } } } } ',
    });

    const data = JSON.parse(result.text);

    return expect(data.data.companies.length).toEqual(20);
  });
});
