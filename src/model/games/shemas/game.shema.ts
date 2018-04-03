import { User } from "../../users/interfaces/user.interface";
import { Tile } from "../interfaces/tile.interface";
import * as mongoose from "mongoose";

export const GameSchema = new mongoose.Schema({
    tiles: Tile[],
    players: User[],
});