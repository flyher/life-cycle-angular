# MyProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


There's a nice way to eject webpack.config.js from angular-cli. Just run:

$ ng eject
This will generate webpack.config.js in the root folder of your project, and you're free to configure it the way you want. The downside of this is that build/start scripts in your package.json will be replaced with the new commands and instead of

$ ng serve
you would have to do something like

$ npm run build & npm run start
This method should work in all the recent versions of angular-cli (I personally tried a few, with the oldest being 1.0.0-beta.21, and the latest 1.0.0-beta.32.3)


To run your builds, you now need to do the following commands:
   - "npm run build" to build.
   - "npm test" to run unit tests.
   - "npm start" to serve the app using webpack-dev-server.
   - "npm run e2e" to run protractor.

Running the equivalent CLI commands will result in an error.