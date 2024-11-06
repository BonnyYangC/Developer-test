# Set up
> npm init -y
> 
> npm install express
> 
> npm install --save-dev typescript @types/node @types/express ts-node nodemon
> 
> npx tsc --init
> 
> npm install --save-dev jest @types/jest ts-jest
> 
> npx ts-jest config:init
> 
> npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
> 
> npx eslint --init
> 

# Build and Run

By default, server runs on port 3000, indicate specific port in .env file

## Install node packages
> npm install

## Start the development server
> npm run dev

## Build the project
> npm build

## Run the compiled code
> npm start

## Run test
> npm test

## Run eslint
> npm run lint

# File Structure
> ghostlink-backend-service/
> 
> ├── src/
> 
> │ └── app.ts # Your application code
> 
> ├── tests/
> 
> │ └── xxxx.test.ts # Example test file
> 
> ├── dist/ # Compiled JavaScript files
> 
> ├── node_modules/
> 
> ├── package.json
> 
> ├── jest.config.js # Jest configuration
> 
> └── tsconfig.json # TypeScript configuration
> 
