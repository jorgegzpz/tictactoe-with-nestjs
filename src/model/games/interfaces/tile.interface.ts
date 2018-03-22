import { User } from "../../users/interfaces/user.interface";

export interface Tile {
    readonly marked: boolean | undefined;
    readonly user: User;
}