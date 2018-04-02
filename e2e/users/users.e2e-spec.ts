import * as express from "express";
import * as request from "supertest";
import { Test } from "@nestjs/testing";
import { UsersModule } from "../../src/model/users/users.module";
import { UsersService } from "../../src/model/users/users.service";
import { INestApplication } from "@nestjs/common";

describe("Users", () => {

    let server;
    let app: INestApplication;

    const usersService = {
        findAll: () => ["test"],
    };

    beforeAll(async () => {
        const module = await Test.createTestingModule({
        imports: [UsersModule],
        })
        .overrideComponent(UsersService)
        .useValue(usersService)
        .compile();

        server = express();
        app = module.createNestApplication(server);
        await app.init();
    });

    it(`/GET users`, () => {
        return request(server)
        .get("/users")
        .expect(200)
        .expect({
            data: usersService.findAll(),
        });
    });

    afterAll(async () => {
        await app.close();
    });
});