import {
    IsInt,
    IsString,
} from "class-validator";

export class CreateUserDto {

    @IsString()
    readonly name: string;

    @IsInt()
    readonly playedGames: number;

    @IsInt()
    readonly wonGames: number;
}