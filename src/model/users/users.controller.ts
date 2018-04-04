import {
    Controller,
    Get,
    Post,
    Body,
    HttpException,
    HttpStatus,
    UseFilters,
} from "@nestjs/common";

import { CreateUserDto } from "./dto/create-user.dto";
import { ForbiddenException } from "../../common/exceptions/forbidden.exception";
import { HttpExceptionFilter } from "../../common/filters/http-exception.filter";

@Controller("users")
@UseFilters(new HttpExceptionFilter())
export class UsersController {
    @Get()
    findAll() {
        return [];
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        throw new ForbiddenException();
    }
}