import { AuthService } from './auth.service';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any, response: Response): Promise<any>;
    test(req: any, response: Response): any;
}
