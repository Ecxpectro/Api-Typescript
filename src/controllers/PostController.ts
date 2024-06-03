import { Request, Response } from "express";
import PostService from "../services/PostService";
import UserDataBaseService from '../services/UserDataBaseService';
import { validateHash } from "../utils/BcryptUtils";

class PostController {
    constructor() { }

    async insertPost(req: Request, res: Response) {
        const body = req.body;
        console.log(body);

        if (!(body.user.email || body.user.name)
            || !body.user.password
            || !body.post.title
            || !body.post.content) {
            res.json({
                status: "error",
                message: "Falta parâmetros",
            });
            return;
        }
        try {
            //Verifica se o usuário existe no banco
            const user = await UserDataBaseService.getUserByNameOrEmail(body.user.name, body.user.email);
            console.log(user)

            if (!user) {
                res.json({
                    status: 'error',
                    message: 'Usuário não encontrado',
                });
                return;
            }
            //Verifica se a senha é a mesma
            const isPasswordValid = await validateHash(body.user.password, user.password);

            if (!isPasswordValid) {
                res.json({
                    status: 'error',
                    message: 'Senha incorreta',
                });
                return;
            }

            const newPost = await PostService.insertPost({
                title: body.post.title,
                content: body.post.content,
                author: {
                    connect: { id: user.id },
                },
                published: false,
            });
            
            res.json({
                status: "ok",
                newuser: newPost,
            });

        } catch (error) {
            res.json({
                status: "error",
                message: error,
            });
        }
    }
}

export default new PostController();