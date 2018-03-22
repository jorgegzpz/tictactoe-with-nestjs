
import { Test } from "@nestjs/testing";
import { GamesController } from "./games.controller";
import { GamesService } from "./games.service";

describe("GamesController", () => {
    let gamesController: GamesController;
    let gamesService: GamesService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [GamesController],
            components: [GamesService],
        }).compile();

        gamesService = module.get<GamesService>(GamesService);
        gamesController = module.get<GamesController>(GamesController);
    });

    describe("findAll", () => {
        it("should return an array of games", async () => {
            const result = [];
            jest.spyOn(gamesService, "findAll").mockImplementation(() => result);

            expect(await gamesController.findAll()).toEqual(result);
        });
    });
});