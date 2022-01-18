import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUser } from './dto/createUser.dto';
import { UpdateUser } from './dto/updateUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    async getUser(): Promise<any>{
        console.log("get all user route")
        return await this.userService.getUsers();
    }

    @Post()
    async createUser(@Body() createUser: CreateUser): Promise<any>{
        console.log("create user route")
        return await this.userService.registerUser(createUser);
    }

    @Post("/update/:id")
    async updateUser(@Param("id") id: string, @Body() updateUser: UpdateUser): Promise<any>{
        console.log("update user route")
        return await this.userService.updateUser(id, updateUser);
    }
}
