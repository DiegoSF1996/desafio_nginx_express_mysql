FROM node

WORKDIR /usr/src/app
COPY /app .
RUN npm install 
RUN npm install -g nodemon
EXPOSE 80
ENTRYPOINT ["nodemon", "/usr/src/app/index.js"]
