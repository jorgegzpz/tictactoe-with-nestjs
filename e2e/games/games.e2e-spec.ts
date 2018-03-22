import * as express from "express";
import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { GamesModule } from "../../src/model/games/games.module";
import { GamesService } from "../../src/model/games/games.service";
import { INestApplication } from "@nestjs/common";

describe("Games", () => {

    let server;
    let app: INestApplication;

    const gamesService = {
        findAll: () => ["test"],
    };

    beforeAll(async () => {
        const module = await Test.createTestingModule({
        imports: [GamesModule],
        })
        .overrideComponent(GamesService)
        .useValue(gamesService)
        .compile();

        server = express();
        app = module.createNestApplication(server);
        await app.init();
    });

    it(`/GET games`, () => {
        return request(server)
        .get("/games")
        .expect(200)
        .expect({
            data: gamesService.findAll(),
        });
    });

    afterAll(async () => {
        await app.close();
    });
});