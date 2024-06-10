# Api-Typescript

##Documentação: 

###Métodos de usuário

* Criar usuário: curl -X POST http://localhost:3000/api/user -H "Content-Type: application/json" -d "{ \\\"name\": \"testuser\", \"email\": \"usertest@test.com\", \"password\": \"123\" }"

   -Objeto a ser enviado { "name": "NomeDoUsuário", "email": "emailDoUsuário", "password": "SenhaDoUsuário"}

* Logar com usuário: curl -X POST http://localhost:3000/api/auth/signin -H "Content-Type: application/json" -d "{\"email\": \"usertest@test.com\",\"password\": \"123\"  }"

  -Objeto a ser enviado { "name": "NomeDoUsuário", "email": "emailDoUsuário", "password": "SenhaDoUsuário"} Observação: pode ser feito o login tanto pelo "email" quanto pelo "name" e ao fazer o login, você recebera o token de validação para consumo da api.

* Consultar todos os usuários: curl -X GET http://localhost:3000/api/users -H "Authorization: Bearer {Seu_Token_De_Acesso}" -H "Content-Type: application/json" => Obrigatório o uso do token de acesso

* Atualizar usuário: curl -X PATCH http://localhost:3000/api/user/{id:id_usuário} -H "Authorization: Bearer {Seu_Token_De_Acesso}" -H "Content-Type: application/json" -d "{ \"name\": \"testupdate\", \"email\": \"testupdate@test.com\"}" => Obrigatório o uso do token de acesso

  -Objeto a ser enviado { "name": "NomeDoUsuário", "email": "emailDoUsuário"}

* Deletar usuário: curl -X DELETE http://localhost:3000/api/user/{id:id_usuário} -H "Authorization: Bearer {Seu_Token_De_Acesso}" -H "Content-Type: application/json" => Obrigatório o uso do token de acesso

###Métodos de Post

* Criar um post: curl -X POST http://localhost:3000/api/post/create -H "Authorization: Bearer {Seu_Token_De_Acesso}" -H "Content-Type: application/json" -d "{\"post\": { \"title\": \"Título do Post1\", \"content\": \"Conteúdo o Post1\" }}" => Obrigatório o uso do token de acesso

  -Objeto a ser enviado {"post": { "title": "Título", "content": "Conteúdo" }}

* Atualizar post: curl -X PATCH http://localhost:3000/api/post/update/{id: idPost} -H "Authorization: Bearer {Seu_Token_De_Acesso}" -H "Content-Type: application/json" -d "{\"title\": \"testUpdate\", \"content\": \"updateTest\"}" => Obrigatório o uso do token de acesso

  -Objeto a ser enviado { "title": "Título", "content": "Conteúdo" }

* Deletar post: curl -X DELETE http://localhost:3000/api/post/delete/{id: idPost} -H "Authorization: Bearer {Seu_Token_De_Acesso}" -H "Content-Type: application/json" => Obrigatório o uso do token de acesso

* Ver todas as postagens: curl -X POST http://localhost:3000/api/post/getallpost -H "Authorization: Bearer {Seu_Token_De_Acesso}" => Obrigatório o uso do token de acesso

* Ver o post segundo o id do usuário: curl -X GET http://localhost:3000/api/post/getPostByUserId/{id: userId} -H "Authorization: Bearer {Seu_Token_De_Acesso}" -H "Content-Type: application/json" => Obrigatório o uso do token de acesso

###Métodos de Comentários

* Criar comentário: curl -X POST http://localhost:3000/api/comment/create -H "Authorization: Bearer {Seu_Token_De_Acesso}" -H "Content-Type: application/json" -d "{ \"postId\": 3, \"content\": \"Conteúdo o test\" }" => Obrigatório o uso do token de acesso

  -Objeto a ser enviado "{ "postId": 3, "content": "Conteúdo" }" => obs: é necessário o idPost para que possa ser feita a relação de um comentário para um post.

* Atualizar comentário: curl -X PATCH http://localhost:3000/api/comment/update/{id: idComment} -H "Authorization: Bearer {Seu_Token_De_Acesso}" -H "Content-Type: application/json" -d "{ \"content\": \"updateTest\"}" => Obrigatório o uso do token de acesso

   -Objeto a ser enviado "{"content": "Conteúdo" }"

* Deletar comentário: curl -X DELETE http://localhost:3000/api/comment/delete/{id: idComment} -H "Authorization: Bearer {Seu_Token_De_Acesso}" -H "Content-Type: application/json" => Obrigatório o uso do token de acesso

* Ver todos os comentários: curl -X POST http://localhost:3000/api/comment/getallcomment -H "Authorization: Bearer {Seu_Token_De_Acesso}" => Obrigatório o uso do token de acesso

* Ver o comentário segundo o id do usuário: curl -X POST http://localhost:3000/api/comment/getallcomment -H "Authorization: Bearer {Seu_Token_De_Acesso}" => Obrigatório o uso do token de acesso
