import {
    Controller,
    Get,
    Post,
    Body,
    HttpException,
    HttpStatus,
    UseFilters,
} from "@nestjs/common";

import { CreateGameDto } from "./dto/create-game.dto";
import { HttpExceptionFilter } from "./../../common/filters/http-exception.filter";
import { ForbiddenException } from "../../common/exceptions/forbidden.exception";

@Controller("games")
@UseFilters(new HttpExceptionFilter())
export class GamesController {
    @Get()
    findAll() {
        return [];
    }

    @Post()
    async create(@Body() createGameDto: CreateGameDto) {
        throw new ForbiddenException();
    }
}