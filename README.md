# totalizer

> A totalizer project

## Requirement
* Node JS +6.10
* yarn 
* firebase-tools

## Build Setup

``` bash
# create firebase app at [firebase console](https://console.firebase.google.com/)
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report
```

## Deploy

``` bash
# login Firebase with your account
firebase login

# set config (copy own api key from https://console.firebase.google.com/project/{your project}/overview )
copy ./config/dev.sample.env.js ./config/dev.env.js
vi ./config/dev.env.js

# build production module
yarn build

# deploy to firebase
firebase deploy
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
