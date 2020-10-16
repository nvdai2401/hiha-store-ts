# build stage

FROM node:12-alpine as build-stage
WORKDIR /app
# COPY . .
COPY package.json ./
COPY yarn.lock ./
RUN yarn --slient
COPY . ./
RUN yarn run start
# CMD ["yarn", "start"]
# RUN yarn build

# # production stage

# FROM nginx:1.17-alpine as production-stage
# COPY --from=build-stage /app/build usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]