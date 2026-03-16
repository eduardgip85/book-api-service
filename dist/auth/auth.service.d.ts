import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto, LoginUserDto } from './dto/auth.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(registerDto: RegisterUserDto): Promise<{
        message: string;
    }>;
    login(loginDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
