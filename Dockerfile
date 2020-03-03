FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 4041

CMD ["npm", "run", "dev"]