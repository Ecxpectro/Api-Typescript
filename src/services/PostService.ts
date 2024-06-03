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

    async updatePost(post: Prisma.PostUpdateInput, id: number){
        try {
            const updatedPost = await prisma.post.update({
              data: post,
              where: {
                id: id,
              },
            });
            return updatedPost;
          } catch (error) {
            console.log(error);
            return null;
          }
    }

    async getPosts(){
        try {
            const posts = await prisma.post.findMany({
                include:{
                    author: true,
                    comments: true
                }
            });
            console.log("posts: ", posts);
            return posts;
            
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getPostsByUserId(id: number){
        try {
            const userPosts = await prisma.post.findMany({
                include:{
                    author:true,
                    comments:true
                },
                where:{
                    author:{id: id}
                }
            });

            return userPosts;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
export default new PostService();