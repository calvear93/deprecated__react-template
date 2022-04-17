###
###   REACT SPA DOCKERFILE
###

# global variables
ARG NODE=node:16.14.2
ARG ALPINE=node:16.14.2-alpine
ARG APP_DIR='/app/'




##
## STAGE 1: node setup
##
FROM ${NODE} AS builder

ARG APP_DIR
ARG ENV

# working directory setup
WORKDIR ${APP_DIR}

COPY package*.json ${APP_DIR}
RUN npm ci

COPY . ${APP_DIR}

# CSP compatibility for avoid 'unsafe-inline'
ENV INLINE_RUNTIME_CHUNK false

# builds the app
ENV NODE_ENV production
RUN npm run build:${ENV}




##
## STAGE 2: server setup
##
FROM ${ALPINE}

ARG APP_DIR

# retrieves build app
COPY --from=builder ${APP_DIR}'build' ${APP_DIR}

# working directory setup
WORKDIR ${APP_DIR}

# alpine security updates
RUN apk --no-cache -U upgrade

# installs http-server (https://www.npmjs.com/package/http-server)
RUN npm install -g http-server@14.1.0
RUN npm cache clean --force

# non root user mode
RUN chown -R node:node ${APP_DIR}
USER node

# execs start command
CMD ["http-server", "--port", "8080", "--cors", "--brotli", "--silent"]

EXPOSE 8080/tcp
