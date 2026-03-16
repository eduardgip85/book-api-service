import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findOne(username: string): Promise<UserDocument | null>;
    findOneWithPassword(username: string): Promise<UserDocument | null>;
    create(username: string, passwordPlain: string): Promise<User>;
    validatePassword(passwordPlain: string, hashedPasswordFromDb: string): Promise<boolean>;
}
