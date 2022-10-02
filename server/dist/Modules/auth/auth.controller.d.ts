import { AuthService } from './auth.service';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any, response: Response): Promise<any>;
    logout(response: Response): string;
}
