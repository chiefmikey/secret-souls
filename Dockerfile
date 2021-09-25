FROM alpine:latest
EXPOSE 3005
WORKDIR /secret-souls
COPY . .
COPY init.sh /bin
RUN rm /secret-souls/init.sh
RUN chmod +x /bin/init.sh
ENTRYPOINT "init.sh"
