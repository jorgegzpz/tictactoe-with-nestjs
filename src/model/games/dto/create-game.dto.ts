import { User } from "model/users/interfaces/user.interface";
import { Tile } from "model/games/interfaces/tile.interface";
import { IsDefined } from "class-validator";

export class CreateGameDto {

    @IsDefined()
    readonly tiles: Tile[];

    @IsDefined()
    readonly players: User[];
}