# LP-Chanllenge

## Overview
Fullstack code challenge using:
### Back-end
- Node.js + express
- Sequelize
- GraphQL
- Jest for testing
### Front-end
- React
- Hooks
- React Router
- Apollo Client

## Running locally
### Back-end
- Open the `./server` folder on terminal.
- Run `npm install`
- Run `npm start`
This will start the server on  http://localhost:4000
### Front-end
The back-end serve is required to use the webclient.
- Open the `./webclient` folder on terminal.
- Run `npm install`
- Run `npm start`
This will start the webclient on  http://localhost:3000
## Deploying
### Back-end
There is no build step or env variables required to deploying the server app.
- Run `npm install`
- Run `npm start`
### Front-end
- Go to the `./webclient` folder.
- Set the `REACT_APP_SERVER_URL` on your CI tool. This should point to the server URL.
- Run `npm build`. `REACT_APP_SERVER_URL` is compiled during the build time. Changing the server URL requires a new buils.
- Copy the content of `./build` folder and serve it as a static artefact on CI.

See the section about [React Deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## To do
What could have been done better:
- Use styled-components lib on the web-client.
- Delegate properties sub-objects, like `overview` and `facts`, to it own resovlers, avoiding overfetch if the client does not request it.
- Integration testes on webclient with `@testing-library/react`.
- Setup a more configurable database connection file.

## Out of Scope
The web client was tested only on chrome browser.
