FROM alpine:latest
EXPOSE 3002
WORKDIR /cloudyman
COPY . .
COPY init.sh /bin
RUN rm /cloudyman/init.sh
RUN chmod +x /bin/init.sh
ENTRYPOINT "init.sh"
