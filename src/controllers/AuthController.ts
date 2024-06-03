import jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import { validateHash } from "../utils/BcryptUtils";
require('dotenv').config();
const jwttoken = process.env.jwt_Token_Validation;

class AuthController {
    constructor() { }

    async signIn(req: Request, res: Response) {
        const body = req.body;
        console.log(body)
        if (!body.email || !body.password) {
            return res.status(401).json({status: 401, error: 'Falta parâmetros' });
        }

        try {
            const user = await AuthService.signIn({
                email: body.email,
                name: body.name,
            });
            console.log(user)

            if (!user) {
                return res.status(401).json({status: 401, error: 'Usuário não encontrado' });
            }

            const isPasswordValid = await validateHash(body.password, user.password);
           
            console.log("response", isPasswordValid)
            
            if (!isPasswordValid) {
                res.json({
                    status: 'error',
                    message: 'Senha incorreta',
                });
                return res.status(401).json({status: 401, error: 'Senha incorreta' });
            }
            if (!jwttoken) {
                return res.status(500).json({status: 500, error: 'Chave secreta não definida' });
            }
            const token = jwt.sign({ userId: user.id }, jwttoken, {
                expiresIn: '1h',
            });

            return res.json({ status:200, accessToken: token });
        } catch (error) {
            return res.status(401).json({status: 401, error: error });
        }
    }

}
export default new AuthController();
