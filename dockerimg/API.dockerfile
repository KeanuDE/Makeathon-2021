FROM node
WORKDIR /home
RUN git clone https://github.com/KeanuDE/Makeathon-2021.git Makeathon
RUN cd Makeathon/api
RUN node app.js