import { Tile } from "model/tile/interfaces/tile.interface";
import { User } from "model/user/interfaces/user.interface";

export interface Game {
    readonly tiles: Tile[];
    readonly players: User[];
}