# Podcaster
A micro application for Music Podcasts

## Development Mode
To run the application in the development mode, execute the command `npm start` in your terminal. This will initialize the app and open it in your default browser at http://localhost:3000.

## Production Mode
To run the application in production mode, it is necessary to generate a production build of the app. Please follow the steps below to create the production build:

1. Run the command npm build in your terminal to create a production build of the app, which will be located in the build folder.

2. Install a simple HTTP server such as serve by running the command npm install -g serve.

3. Run the serve command with the build directory as the argument and specify the port number as 5000 by running the command: `serve -s build --port 5000`

## Tests
To execute the test suite for the application, run the command `npm test` in your terminal. This will initiate the test runner with the tests results.