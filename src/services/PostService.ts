import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PostService {
    constructor() { }

    async insertPost(post: Prisma.PostCreateInput) {
        try {
            const newpost = await prisma.post.create({
                data: post
            });
            return newpost;
            
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
export default new PostService();