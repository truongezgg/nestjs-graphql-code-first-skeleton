## NestJS Monorepo mode

https://docs.nestjs.com/cli/monorepo

## Description

NestJS & GraphQL skeleton project

Nguyen Duy Truong | truongezgg@gmail.com

## Environment

MacOS
NodeJS v18.15.0
npm 9.5.0

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start api

# watch mode
$ npm run start:dev api

# production mode
$ npm run start:prod api
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```

## Query

```graphql
{
  companies {
    id
    createdAt
    name
    parentId
    cost

    children {
      id
      createdAt
      name
      parentId
      cost

      children {
        id
        createdAt
        name
        parentId
        cost

        children {
          id
          createdAt
          name
          parentId
          cost
        }
      }
    }
  }
}
```

## Response

```json
{
  "data": {
    "companies": [
      {
        "id": "uuid-1",
        "createdAt": "2021-02-26T00:55:36.632Z",
        "name": "Webprovise Corp",
        "parentId": "0",
        "cost": 52983,
        "children": [
          {
            "id": "uuid-2",
            "createdAt": "2021-02-25T10:35:32.978Z",
            "name": "Stamm LLC",
            "parentId": "uuid-1",
            "cost": 5199,
            "children": [
              {
                "id": "uuid-4",
                "createdAt": "2021-02-25T06:11:47.519Z",
                "name": "Price and Sons",
                "parentId": "uuid-2",
                "cost": 1340,
                "children": []
              },
              {
                "id": "uuid-7",
                "createdAt": "2021-02-25T07:56:32.335Z",
                "name": "Zieme - Mills",
                "parentId": "uuid-2",
                "cost": 1636,
                "children": []
              },
              {
                "id": "uuid-19",
                "createdAt": "2021-02-25T21:06:18.777Z",
                "name": "Schneider - Adams",
                "parentId": "uuid-2",
                "cost": 794,
                "children": []
              }
            ]
          },
          {
            "id": "uuid-3",
            "createdAt": "2021-02-25T15:16:30.887Z",
            "name": "Blanda, Langosh and Barton",
            "parentId": "uuid-1",
            "cost": 15713,
            "children": [
              {
                "id": "uuid-5",
                "createdAt": "2021-02-25T13:35:57.923Z",
                "name": "Hane - Windler",
                "parentId": "uuid-3",
                "cost": 1288,
                "children": []
              },
              {
                "id": "uuid-6",
                "createdAt": "2021-02-26T01:41:06.479Z",
                "name": "Vandervort - Bechtelar",
                "parentId": "uuid-3",
                "cost": 2512,
                "children": []
              },
              {
                "id": "uuid-9",
                "createdAt": "2021-02-25T16:02:49.099Z",
                "name": "Kuhic - Swift",
                "parentId": "uuid-3",
                "cost": 3086,
                "children": []
              },
              {
                "id": "uuid-17",
                "createdAt": "2021-02-25T11:17:52.132Z",
                "name": "Rohan, Mayer and Haley",
                "parentId": "uuid-3",
                "cost": 4072,
                "children": []
              },
              {
                "id": "uuid-20",
                "createdAt": "2021-02-26T01:51:25.421Z",
                "name": "Kunde, Armstrong and Hermann",
                "parentId": "uuid-3",
                "cost": 908,
                "children": []
              }
            ]
          },
          {
            "id": "uuid-8",
            "createdAt": "2021-02-25T23:47:57.596Z",
            "name": "Bartell - Mosciski",
            "parentId": "uuid-1",
            "cost": 28817,
            "children": [
              {
                "id": "uuid-10",
                "createdAt": "2021-02-26T01:39:33.438Z",
                "name": "Lockman Inc",
                "parentId": "uuid-8",
                "cost": 4288,
                "children": []
              },
              {
                "id": "uuid-11",
                "createdAt": "2021-02-26T00:32:01.307Z",
                "name": "Parker - Shanahan",
                "parentId": "uuid-8",
                "cost": 12236,
                "children": [
                  {
                    "id": "uuid-12",
                    "createdAt": "2021-02-25T06:44:56.245Z",
                    "name": "Swaniawski Inc",
                    "parentId": "uuid-11",
                    "cost": 2110
                  },
                  {
                    "id": "uuid-14",
                    "createdAt": "2021-02-25T15:22:08.098Z",
                    "name": "Weimann, Runolfsson and Hand",
                    "parentId": "uuid-11",
                    "cost": 7254
                  }
                ]
              },
              {
                "id": "uuid-13",
                "createdAt": "2021-02-25T20:45:53.518Z",
                "name": "Balistreri - Bruen",
                "parentId": "uuid-8",
                "cost": 1686,
                "children": []
              },
              {
                "id": "uuid-15",
                "createdAt": "2021-02-25T18:00:26.864Z",
                "name": "Predovic and Sons",
                "parentId": "uuid-8",
                "cost": 4725,
                "children": []
              },
              {
                "id": "uuid-16",
                "createdAt": "2021-02-26T01:50:50.354Z",
                "name": "Weissnat - Murazik",
                "parentId": "uuid-8",
                "cost": 3277,
                "children": []
              }
            ]
          },
          {
            "id": "uuid-18",
            "createdAt": "2021-02-26T02:31:22.154Z",
            "name": "Walter, Schmidt and Osinski",
            "parentId": "uuid-1",
            "cost": 2033,
            "children": []
          }
        ]
      },
      {
        "id": "uuid-2",
        "createdAt": "2021-02-25T10:35:32.978Z",
        "name": "Stamm LLC",
        "parentId": "uuid-1",
        "cost": 5199,
        "children": [
          {
            "id": "uuid-4",
            "createdAt": "2021-02-25T06:11:47.519Z",
            "name": "Price and Sons",
            "parentId": "uuid-2",
            "cost": 1340,
            "children": []
          },
          {
            "id": "uuid-7",
            "createdAt": "2021-02-25T07:56:32.335Z",
            "name": "Zieme - Mills",
            "parentId": "uuid-2",
            "cost": 1636,
            "children": []
          },
          {
            "id": "uuid-19",
            "createdAt": "2021-02-25T21:06:18.777Z",
            "name": "Schneider - Adams",
            "parentId": "uuid-2",
            "cost": 794,
            "children": []
          }
        ]
      },
      {
        "id": "uuid-3",
        "createdAt": "2021-02-25T15:16:30.887Z",
        "name": "Blanda, Langosh and Barton",
        "parentId": "uuid-1",
        "cost": 15713,
        "children": [
          {
            "id": "uuid-5",
            "createdAt": "2021-02-25T13:35:57.923Z",
            "name": "Hane - Windler",
            "parentId": "uuid-3",
            "cost": 1288,
            "children": []
          },
          {
            "id": "uuid-6",
            "createdAt": "2021-02-26T01:41:06.479Z",
            "name": "Vandervort - Bechtelar",
            "parentId": "uuid-3",
            "cost": 2512,
            "children": []
          },
          {
            "id": "uuid-9",
            "createdAt": "2021-02-25T16:02:49.099Z",
            "name": "Kuhic - Swift",
            "parentId": "uuid-3",
            "cost": 3086,
            "children": []
          },
          {
            "id": "uuid-17",
            "createdAt": "2021-02-25T11:17:52.132Z",
            "name": "Rohan, Mayer and Haley",
            "parentId": "uuid-3",
            "cost": 4072,
            "children": []
          },
          {
            "id": "uuid-20",
            "createdAt": "2021-02-26T01:51:25.421Z",
            "name": "Kunde, Armstrong and Hermann",
            "parentId": "uuid-3",
            "cost": 908,
            "children": []
          }
        ]
      },
      {
        "id": "uuid-4",
        "createdAt": "2021-02-25T06:11:47.519Z",
        "name": "Price and Sons",
        "parentId": "uuid-2",
        "cost": 1340,
        "children": []
      },
      {
        "id": "uuid-5",
        "createdAt": "2021-02-25T13:35:57.923Z",
        "name": "Hane - Windler",
        "parentId": "uuid-3",
        "cost": 1288,
        "children": []
      },
      {
        "id": "uuid-6",
        "createdAt": "2021-02-26T01:41:06.479Z",
        "name": "Vandervort - Bechtelar",
        "parentId": "uuid-3",
        "cost": 2512,
        "children": []
      },
      {
        "id": "uuid-7",
        "createdAt": "2021-02-25T07:56:32.335Z",
        "name": "Zieme - Mills",
        "parentId": "uuid-2",
        "cost": 1636,
        "children": []
      },
      {
        "id": "uuid-8",
        "createdAt": "2021-02-25T23:47:57.596Z",
        "name": "Bartell - Mosciski",
        "parentId": "uuid-1",
        "cost": 28817,
        "children": [
          {
            "id": "uuid-10",
            "createdAt": "2021-02-26T01:39:33.438Z",
            "name": "Lockman Inc",
            "parentId": "uuid-8",
            "cost": 4288,
            "children": []
          },
          {
            "id": "uuid-11",
            "createdAt": "2021-02-26T00:32:01.307Z",
            "name": "Parker - Shanahan",
            "parentId": "uuid-8",
            "cost": 12236,
            "children": [
              {
                "id": "uuid-12",
                "createdAt": "2021-02-25T06:44:56.245Z",
                "name": "Swaniawski Inc",
                "parentId": "uuid-11",
                "cost": 2110,
                "children": []
              },
              {
                "id": "uuid-14",
                "createdAt": "2021-02-25T15:22:08.098Z",
                "name": "Weimann, Runolfsson and Hand",
                "parentId": "uuid-11",
                "cost": 7254,
                "children": []
              }
            ]
          },
          {
            "id": "uuid-13",
            "createdAt": "2021-02-25T20:45:53.518Z",
            "name": "Balistreri - Bruen",
            "parentId": "uuid-8",
            "cost": 1686,
            "children": []
          },
          {
            "id": "uuid-15",
            "createdAt": "2021-02-25T18:00:26.864Z",
            "name": "Predovic and Sons",
            "parentId": "uuid-8",
            "cost": 4725,
            "children": []
          },
          {
            "id": "uuid-16",
            "createdAt": "2021-02-26T01:50:50.354Z",
            "name": "Weissnat - Murazik",
            "parentId": "uuid-8",
            "cost": 3277,
            "children": []
          }
        ]
      },
      {
        "id": "uuid-9",
        "createdAt": "2021-02-25T16:02:49.099Z",
        "name": "Kuhic - Swift",
        "parentId": "uuid-3",
        "cost": 3086,
        "children": []
      },
      {
        "id": "uuid-10",
        "createdAt": "2021-02-26T01:39:33.438Z",
        "name": "Lockman Inc",
        "parentId": "uuid-8",
        "cost": 4288,
        "children": []
      },
      {
        "id": "uuid-11",
        "createdAt": "2021-02-26T00:32:01.307Z",
        "name": "Parker - Shanahan",
        "parentId": "uuid-8",
        "cost": 12236,
        "children": [
          {
            "id": "uuid-12",
            "createdAt": "2021-02-25T06:44:56.245Z",
            "name": "Swaniawski Inc",
            "parentId": "uuid-11",
            "cost": 2110,
            "children": []
          },
          {
            "id": "uuid-14",
            "createdAt": "2021-02-25T15:22:08.098Z",
            "name": "Weimann, Runolfsson and Hand",
            "parentId": "uuid-11",
            "cost": 7254,
            "children": []
          }
        ]
      },
      {
        "id": "uuid-12",
        "createdAt": "2021-02-25T06:44:56.245Z",
        "name": "Swaniawski Inc",
        "parentId": "uuid-11",
        "cost": 2110,
        "children": []
      },
      {
        "id": "uuid-13",
        "createdAt": "2021-02-25T20:45:53.518Z",
        "name": "Balistreri - Bruen",
        "parentId": "uuid-8",
        "cost": 1686,
        "children": []
      },
      {
        "id": "uuid-14",
        "createdAt": "2021-02-25T15:22:08.098Z",
        "name": "Weimann, Runolfsson and Hand",
        "parentId": "uuid-11",
        "cost": 7254,
        "children": []
      },
      {
        "id": "uuid-15",
        "createdAt": "2021-02-25T18:00:26.864Z",
        "name": "Predovic and Sons",
        "parentId": "uuid-8",
        "cost": 4725,
        "children": []
      },
      {
        "id": "uuid-16",
        "createdAt": "2021-02-26T01:50:50.354Z",
        "name": "Weissnat - Murazik",
        "parentId": "uuid-8",
        "cost": 3277,
        "children": []
      },
      {
        "id": "uuid-17",
        "createdAt": "2021-02-25T11:17:52.132Z",
        "name": "Rohan, Mayer and Haley",
        "parentId": "uuid-3",
        "cost": 4072,
        "children": []
      },
      {
        "id": "uuid-18",
        "createdAt": "2021-02-26T02:31:22.154Z",
        "name": "Walter, Schmidt and Osinski",
        "parentId": "uuid-1",
        "cost": 2033,
        "children": []
      },
      {
        "id": "uuid-19",
        "createdAt": "2021-02-25T21:06:18.777Z",
        "name": "Schneider - Adams",
        "parentId": "uuid-2",
        "cost": 794,
        "children": []
      },
      {
        "id": "uuid-20",
        "createdAt": "2021-02-26T01:51:25.421Z",
        "name": "Kunde, Armstrong and Hermann",
        "parentId": "uuid-3",
        "cost": 908,
        "children": []
      }
    ]
  }
}
```
