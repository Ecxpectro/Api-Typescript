# Api-Typescript

##Documentação: 

##Métodos de usuário

* Criar usuário: curl -X POST http://localhost:3000/api/user -H "Content-Type: application/json" -d "{ \"name\": \"testuser\", \"email\": \"usertest@test.com\", \"password\": \"123\" }"

   -Objeto a ser enviado { "name": "NomeDoUsuário", "email": "emailDoUsuário", "password": "SenhaDoUsuário"}

* Logar com usuário: curl -X POST http://localhost:3000/api/auth/signin -H "Content-Type: application/json" -d "{\"email\": \"usertest@test.com\",\"password\": \"123\"  }"

  -Objeto a ser enviado { "name": "NomeDoUsuário", "email": "emailDoUsuário", "password": "SenhaDoUsuário"} Observação: pode ser feito o login tanto pelo "email" quanto pelo "name" e ao fazer o login, você recebera o token de validação para consumo da api.

* Consultar todos os usuários: curl -X GET http://localhost:3000/api/users -H "Authorization: Bearer {Seu_Token_De_Acesso}" -H "Content-Type: application/json" => Obrigatório o uso do token de acesso

* Atualizar usuário: curl -X PATCH http://localhost:3000/api/user/{id:id_usuário} -H "Authorization: Bearer {Seu_Token_De_Acesso}" -H "Content-Type: application/json" -d "{ \"name\": \"testupdate\", \"email\": \"testupdate@test.com\"}" => Obrigatório o uso do token de acesso

  -Objeto a ser enviado { "name": "NomeDoUsuário", "email": "emailDoUsuário"}

* Deletar usuário: curl -X DELETE http://localhost:3000/api/user/{id:id_usuário} -H "Authorization: Bearer {Seu_Token_De_Acesso}" -H "Content-Type: application/json" => Obrigatório o uso do token de acesso
