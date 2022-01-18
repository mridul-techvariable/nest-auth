import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    username: string;

    @Prop()
    password: string;

    @Prop()
    createdAt: Date;

    @Prop()
    lastUpdatedAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);