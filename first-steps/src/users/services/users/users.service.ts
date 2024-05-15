import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/users/dtos/CreateUser.dto';


@Injectable()
export class UsersService {
    private users: UserDto[] = [
        { name: "Marto", email: "Marto@abv.bg", id: 1 },
        { name: "Gosho", email: "Gosho@abv.bg", id: 2 },
        { name: "Ivan", email: "Ivan@abv.bg", id: 3 },
        { name: "Pesho", email: "Pesho@abv.bg", id: 4 },
        { name: "Hristo", email: "Hristo@abv.bg", id: 5 },
    ]
    fetchUsers(sortBy: string, limit: number) {
        if (sortBy == "asc") {
            return this.users.slice().sort((a, b) => a.name.localeCompare(b.name)).slice(0, limit || this.users.length);
        }
        else if (sortBy == "dsc") {
            return this.users.slice().sort((a, b) => b.name.localeCompare(a.name)).slice(0, limit || this.users.length);
        }
        return this.users.slice(0, limit || this.users.length);
    }
    fetchUserById(id: number) {
        const userIndex: number = this.users.findIndex((x) => x.id == id);
        if (userIndex == -1) {
            return "User is not found!";
        }
        return this.users[userIndex];
    }
    createUser(data: UserDto) {
        const id: number = this.users.length + 1;
        data.id = id;
        this.users.push(data);
        return data;
    }
    editUser(id: number, userData: UserDto) {
        const userIndex: number = this.users.findIndex((x) => x.id == id);
        if (userIndex == -1) {
            return "User is not found!";
        }
        this.users.splice(userIndex, 1, { ...userData, id });
        return this.users[userIndex];
    }
    deleteUser(id: number) {
        const userIndex: number = this.users.findIndex((x) => x.id == id);
        if (userIndex == -1) {
            return "User is not found!";
        }
        const user: UserDto = this.users.splice(userIndex, 1)[0];
        console.log(this.users);
        return user;
    }
}
