# GRAPHQL-SERVICE

### Description
The application is comfortable and convenient service for our users to manage and retrieve data for different entities
from microservices that are created for the service Musicify.  
In project I use
graphql,
apollo-server,
apollo-datasource-rest,
nodemon,
dotenv,
typescript,
ts-node,
ts-node-dev,
eslint and its plugins,
prettier,
@types/node

### Installation
1. Open Bash.
2. Change the current working directory to the location where you want the cloned directory.
3. Clone a repo
   `git clone git@github.com:dina-shchobova/graphql-service.git`
   **or**
   `git clone https://github.com/dina-shchobova/graphql-service.git`

4. Go to development branch `git checkout develop`

5. Install dependencies
   `npm install`

### Run

There are two modes of running application (development and production).

**Production.** To run this mod use the command
`npm run start`

**Development.** The application is run using nodemon. To run this mod use the commands:

- In one terminal run the command
  `npm run compile`
- And then in another terminal run the command
  `npm run start:dev`

### Usage

1. Open in browser http://localhost:3000/. Click on the button "Query your server"
2. An unregistered user can only access requests (except request favorites)
3. You must register a user to access the operations of adding / deleting / updating and request favorites:
    - select mutation "registerUser"; input firstName, lastName, password, email; remember the email and password;
    - select query "jwt"; input email and password, click on the button "Query"; copy token from Response;
    - in Headers click "New header", choose "Authorization" in field "header key" and insert token in field
      "value" **(only token, without quotes and the word "Bearer" !!!)**



### Implementation details

1. При запросе сущностей, в которых используется id удаленной другой сущности, выдается ошибка.
   Автор таска писал, что это нормальное поведение. Обрабатывать не нужно.
   Вот ссылка на скриншот со словами автора таска: https://clip2net.com/s/4g7aSeZ
   Как вариант, лучше проверять мутации на удаление последними.
2. В альбоме присутствует поле image: string. Реализовывать его работу не нужно.
   Также ссылка на скриншот со словами автора таска: https://clip2net.com/s/4g7aUEL


