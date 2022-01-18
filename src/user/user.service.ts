import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUser } from './dto/createUser.dto';
import { UpdateUser } from './dto/updateUser.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  // Get list of all users
  async getUsers(): Promise<User[]> {
    return await this.model.find().exec();
  }

  // Create a user
  async registerUser(createUser: CreateUser): Promise<User> {
    return await new this.model({
      ...createUser,
      createdAt: new Date(),
    }).save();
  }

  // Update user data
  async updateUser(id: string, updateUser: UpdateUser): Promise<User> {
    return await this.model
      .findByIdAndUpdate(id, { ...updateUser, lastUpdatedAt: new Date() })
      .exec();
  }
}
