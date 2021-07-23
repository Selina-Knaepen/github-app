# GithubApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

##  ES6+ functions

1. **Template literals:** This function was used in the services in to note down the urls. This was used to not have to work with string concatenation and to give a better overview of what the string looks like.
2. **For-of Loop:** This was used in the _repo and commit service_ to loop throught the objects in the response that the api gave. This made it easier to map the list of JSON objects to a _Commit/Repo object_.
3. **Modules:** used to import certain variables from Modules or Libraries. Using this makes it so not all variables need to be imported, but just the ones that are needed.

If there are any other features that I have missed then that might be because I didn't realise that those features are ES6+.
