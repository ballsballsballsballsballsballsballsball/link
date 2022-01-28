FROM node:16.13.1-alpine AS node-build
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY components ./components
RUN yarn install --frozen-lockfile --check-files --network-timeout 600000
RUN yarn build --noninteractive
RUN yarn install --frozen-lockfile --check-files --production --modules-folder node_modules_prod --network-timeout 600000

FROM node:16.13.1-alpine
WORKDIR /usr/src/app
ENV NODE_ENV production
RUN mkdir -p /node_modules
COPY --from=node-build /usr/src/app/.next ./.next
COPY --from=node-build /usr/src/app/node_modules_prod ./node_modules
EXPOSE 3030
CMD [ "npm", "start" ]