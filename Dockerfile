
FROM node:lts AS base
WORKDIR /app
COPY package*.json ./

FROM base AS development
RUN npm install
COPY . .
RUN npx prisma generate
CMD ["npm", "run", "dev"]




