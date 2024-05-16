### I will update this soon to explain the process

****
## File structure

- /project-root
  - /prisma
    - /migrations
      - migration file
    - schema.prisma
  - /src
    - /config
      - Nothing

    - /controllers
      - emailController.ts
      - index.ts 
    - /middlewares
      - errorHandler.ts
      - index.ts
    - /models
      - Nothing already in prisma
    - /routes
      - emailRoutes.ts
      - index.ts
    - /services
      - emailServices.ts
      - scheduleEmails.ts
      - index.ts
    - /types
      - Nothing
    - /utils
      - /errors
        - BadRequestError.ts
        - CustomError.ts
        - NotFoundError.ts
      - response.ts
      - sendMail.ts
      - index.ts
    - app.ts
    - server.ts
  - .env
  - .gitignore
  - package.json
  - tsconfig.json
  - .eslintrc.js
  - .prettierrc
  - Dockerfile
  - docker-compose.yml
  - README.md





**DataBase**
> Use the prisma orm ,

Flow is 
> index.ts -> router ->controller->services ->repository 


### I have let the Model folder there ,But it can be remove as I have initialize  the Prisma outside 

--> Types is there ,for any kind of typescript ,interface and type definition

--> Config is to save the any configuration, like env and other ,this folder is not needed in this case ,as I have put the things in the **.env** file  . But large project it may be needed 

--> In route Index , file has been left empty, We can use that controlling versions, but as project was small I have left that empty 
