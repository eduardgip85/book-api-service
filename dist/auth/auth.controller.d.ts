import { AuthService } from './auth.service';
import { RegisterUserDto, LoginUserDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterUserDto): Promise<{
        message: string;
    }>;
    login(loginDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
