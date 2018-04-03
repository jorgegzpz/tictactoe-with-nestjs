
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./shemas/user.shema";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: "User",
            schema: UserSchema,
        }]),
    ],
    controllers: [UsersController],
    components: [UsersService],
})
export class UsersModule {}
