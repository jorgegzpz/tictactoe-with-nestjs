
import { Module } from "@nestjs/common";
import { GamesModule } from "./model/games/games.module";
import { UsersModule } from "./model/users/users.module";

@Module({
    imports: [
        GamesModule,
        UsersModule,
    ],
})
export class ApplicationModule {}
