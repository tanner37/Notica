FROM node:22-alpine

COPY / /notica/

WORKDIR /notica/

RUN addgroup -S notica && \
    adduser -S notica -G notica && \
    apk add -U tzdata tini && \
    yarn install --frozen-lockfile && \
    chown -R notica:notica /notica/ && \
    chmod +x /notica/entrypoint

USER notica

EXPOSE 3000

ENTRYPOINT ["tini", "--", "/notica/entrypoint"]

CMD ["yarn","start","--host","0.0.0.0","--port","3000"]
