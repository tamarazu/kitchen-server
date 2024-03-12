FROM node:14
WORKDIR /kitchen-server

COPY package.json .
RUN npm install
COPY . .

CMD npm start
