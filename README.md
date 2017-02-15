# Radbox

## Why Radbox?

Radbox is an [Inbox](https://inbox.google.com/) inspired forum platform.

## Stack

It uses [Material Design Lite](https://getmdl.io/) for the look-and-feel, [Angular](https://angularjs.org/) for frontend data binding, [Express](http://expressjs.com/) for the backend API and [Pouchdb](https://pouchdb.com/) for persistent data storage.

## Project Structure

The project includes a landing page and the main application.

## Global Routing

- `/` Shows the landing page
- `/app` Shows the main application
- `/login` Shows the login page
- `/signup` Shows the sign-up page
- `/docs` Shows the documentation

## Todo

- Setup configurable environments for development and production (currently only development)
- Compile client-side JavaScript files with Closure library (for optimization and obfuscation)
- Compile client-side LESS files into CSS files (currently using a LESS compiler JS library running on the client side)
- ~~Login and Signup views~~

## Roadmap

- Add authentication (login, signup)
- Add API wrapper service for data manipulation in PouchDB