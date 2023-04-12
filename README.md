# Vue snippet code

Vue.js SFC file snippet to renders a table, and via (pretend) endpoint call, populate itself with the following columns: ID, Name, Email, Phone.

## Design

This application has 2 parts, the server side, and the client side.

For server-side, use Node Express to build REST API that allows to get all list of users.

For the client-side, use axios to request REST API to get all user list and renders a table with user details

## Requirement

NodeJS v18

## Project setup

```
npm install
```

## To run the project

Open two terminal windows run node backend server and run client-side application

```
npm run server
```

Run Node.js Express server to allow to request REST API

```
npm run serve
```

Runs the application in the development mode
