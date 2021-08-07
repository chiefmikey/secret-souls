FROM node:latest
EXPOSE 8080
WORKDIR /secret-souls
COPY . .
COPY init.sh /bin
RUN rm /secret-souls/init.sh
RUN chown -R node:node /secret-souls
RUN chown node:node /bin/init.sh
RUN chmod +x /bin/init.sh
USER node
ENTRYPOINT "init.sh"
