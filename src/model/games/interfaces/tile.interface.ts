import { User } from "model/user/interfaces/user.interface";

export interface Tile {
    readonly marked: boolean | undefined;
    readonly user: User;
}