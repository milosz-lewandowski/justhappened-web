FROM node:13.12.0-alpine
WORKDIR /home/debian/jhappdir/justhappened-web

#overrides package.json package-lock.json
COPY package*.json ./
#COPY package.json ./
#COPY package-lock.json ./

RUN npm install

# add app
COPY . .
EXPOSE 80

# start app
CMD ["npm", "start"]