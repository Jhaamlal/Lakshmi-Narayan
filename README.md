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



