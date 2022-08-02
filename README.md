# TesteTecnico

## <a href='http://twitter-watcher.vercel.app/'>Link to deploy</a>

## About this project

This project was created to see the last 10 twittes from your twitter account and to research an account to see the last 10 twittes of its timeline.

I used the NGRX to manage the state of the components, and Angular Material to create the style of the app.

This app consumes the twitter api to show the information, I also created and deployed in heroku, an external api to use the twitter api, so I avoid beeing blocked by CORS policy. The link of the api deployed in heroku is:

### <a href='https://twitter-req.herokuapp.com/'>

Link of the API in heroku</a>

## Main Libraries used in this Project

<ul>
<li>Angular Material</li>
<li>Angular NGRX</li>
</ul>

## Command to build and run docker container:

You can build and run the sample in a Docker container by using the provided scripts:

<pre>
docker build -t twitter-watcher .
docker run --init -p 4200:4200 -it twitter-watcher
</pre>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
