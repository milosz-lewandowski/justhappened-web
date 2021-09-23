FROM node:13.12.0-alpine
WORKDIR .

COPY package*.json ./

RUN npm install
#RUN npm build
# add app
COPY . .
EXPOSE 80

# start app
CMD ["npm", "start"]