import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/users/dtos/CreateUser.dto';


@Injectable()
export class UsersService {
    private users: UserDto[] = [
        { name: "Marto", email: "Marto@gmail.com", id: 1 },
        { name: "Gosho", email: "Gosho@gmail.com", id: 2 },
        { name: "Ivan", email: "Ivan@gmail.com", id: 3 },
        { name: "Pesho", email: "Pesho@gmail.com", id: 4 },
        { name: "Hristo", email: "Hristo@gmail.com", id: 5 },
    ]
    fetchUsers(sortBy: string | undefined, limit: number | undefined) {
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
        return user;
    }
}
