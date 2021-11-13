FROM node
WORKDIR /homme
RUN ["git clone https://github.com/KeanuDE/Makeathon-2021.git && cd api && node app.js"]