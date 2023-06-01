FROM public.ecr.aws/h4m7c9h3/baseimages:node-16.13.2-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
RUN yarn install

COPY ./ ./

RUN yarn build

CMD yarn run start:prod
