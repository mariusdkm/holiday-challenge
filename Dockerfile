# stage build
FROM node:16-alpine as builder

WORKDIR /app

# copy everything to the container
COPY . .

# clean install all dependencies
RUN npm ci

# remove potential security issues
RUN npm audit fix

# build SvelteKit app
RUN npm run build


# stage run
FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/.env ./.env


EXPOSE 3000

CMD ["node", "build"]