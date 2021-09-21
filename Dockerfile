FROM node:13.12.0-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install

# add app
COPY . .
EXPOSE 80

# start app
CMD ["npm", "start"]