
import { Module } from "@nestjs/common";
import { GamesController } from "./games.controller";
import { GamesService } from "./games.service";

@Module({
    controllers: [GamesController],
    components: [GamesService],
})
export class GamesModule {}
