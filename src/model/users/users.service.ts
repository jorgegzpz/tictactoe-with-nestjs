import { Model } from "mongoose";
import { Component } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./interfaces/user.interface";
import { UserSchema } from "./shemas/user.shema";
import { CreateUserDto } from "./dto/create-user.dto";
@Component()
export class UsersService {
    constructor(@InjectModel(UserSchema) private readonly userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto) {
        const createUser = new this.userModel(createUserDto);
        return await createUser.save();
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }
}
