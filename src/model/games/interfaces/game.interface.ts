import { Tile } from "../interfaces/tile.interface";
import { User } from "../../users/interfaces/user.interface";

export interface Game {
    readonly tiles: Tile[];
    readonly players: User[];
}