
import { Module } from "@nestjs/common";
import { GamesModule } from "./model/games/games.module";
import { UsersModule } from "./model/users/users.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        GamesModule,
        UsersModule,
        MongooseModule.forRoot("mongodb://localhost/tictactoe"),
    ],
})
export class ApplicationModule {}
