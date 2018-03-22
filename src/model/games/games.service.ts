
import { Component } from "@nestjs/common";
import { Game } from "./interfaces/game.interface";

@Component()
export class GamesService {
    private readonly games: Game[] = [];

    create(game: Game) {
        this.games.push(game);
    }

    findAll(): Game[] {
        return this.games;
    }
}
