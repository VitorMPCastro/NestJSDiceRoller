import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('App (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should roll a dice', async () => {
    const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `
          mutation {
            rollDice(input: { sides: 6 }) {
              id
              sides
              result
              createdAt
            }
          }
        `,
        });

    expect(response.body.data.rollDice).toHaveProperty('sides', 6);
  });

  it('should fetch roll history', async () => {
    const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `
          query {
            diceRollHistory {
              id
              sides
              result
              createdAt
            }
          }
        `,
        });

    expect(Array.isArray(response.body.data.diceRollHistory)).toBe(true);
  });

  afterAll(async () => {
    await app.close();
  });
});
