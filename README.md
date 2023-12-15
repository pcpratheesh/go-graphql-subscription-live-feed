# go-graphql-subscription-live-feed
This application showcases a basic setup for a real-time data streaming functionality using `GraphQL subscriptions`. The backend is built with Golang, utilizing the popular `99designs/gqlgen` package to implement the GraphQL server with subscription capabilities. On the frontend, `React` is used to connect to the `GraphQL` server, displaying the real-time data updates on the UI.

## Backend (Golang)
- Navigate to the `server` directory.
- Run `go mod download `to install the necessary Go packages.
- Run `go run server.go` to start the GraphQL server.

## Frontend (React)

- Navigate to the `client` directory.
- Run `npm install` to install the required npm packages.
- Run `npm start` to start the React development server.

## Usage
Access the React application at [http://localhost:3000](http://localhost:3000) (or as per the React server configuration).


![Screenshot](scheenshot.png)