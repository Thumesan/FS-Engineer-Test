
# FS-Engineer-Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

This is a demonstration of a full stack application using .Net and Angular 13

The project includes openAPI complient API built with .netCore 3.1, containerized with docker and deployed to Heroku, for the backend. 

For the front-end the application used Angular 13 with ng-openapi-gen to generate services and models required for consumption of the API.

# Running the Application

## Local configuration

1. Clone the repository from https://github.com/Thumesan/FS-Engineer-Test.git
2. The Repo is split into two parts:
   1. The FS-Engineer-Test-FE segment contains the Angular front end of the application.
   2. The FS-Engineer-Test segment contains the .NetCore 3.1 Backend of the application.

### Running the front-end locally
1. navigate to the front end location '/FS-Engineer-Test-FE' above, Ensure to have nodeJS and angular cli installed.
2. In the terminal or using your CLI at the application location/path run `npm i` to install dependancies
3. Replace the **rootUrl** in the `api/api-configuration.ts` file to **"/api"** 
4. Run `ng serve --proxy-config proxy.conf.json` to start the application and proxy to bypass CORS Locally
5. Use the application

### Running the back-end Locally
1. Navigate to the back-end location in your terminal '/FS-Engineer-Test'
2. run the command `dotnet run`
3. The front-end proxy configuration will assist to bypass CORS from your browser to the backend.

#### Test via postman
When the back-end is running you may test this locally from Postman using `https://localhost:5001/<pathToEndpoint>`

Endpoint paths:
- Chuck/categories
- Swapi/people
- Search/{query}

---
## Using the hosted application
The application is hosted using Firebase hosting whilst the server is based on Heroku.

There is a CORS issue restricting communinication between these hosts, but they have been bypassed as you will see below.

1. Navigate to the [CORS Bypass application](https://cors-anywhere.herokuapp.com/corsdemo) and click on the button _**`Request temporary access to the demo server`**_
2. Navigate to the appication [FS Engineer Test](https://fs-engineer-test.firebaseapp.com/main)
3. You may access the swaggerUI here [SwaggerUI](https://fs-engineer-test.herokuapp.com/swagger/index.html)