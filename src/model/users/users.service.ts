
import { Component } from "@nestjs/common";
import { User } from "model/users/interfaces/user.interface";

@Component()
export class UsersService {
    private readonly users: User[] = [];

    create(user: User) {
        this.users.push(user);
    }

    findAll(): User[] {
        return this.users;
    }
}
