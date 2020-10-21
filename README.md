# AngularClient10

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Purpose

The purpose of this project was to test variable endpoints with both the Spring Webflux and Angular frameworks. Since the controller sends /user/ as a flux endpoint, and /user/{id} as a variable Mono endpoint, this project illustrates how to work with both in terms of displaying the concepts in their respective areas of change.

Specifically:

angular-client11 has:
	service/user.service.ts -> find()					            NUMBER.
	user/user.component.ts -> goToUser()							    FUNCTION {id}.
	user/user.component.html -> ngIf = "user$...		      FIRST LINE CHANGE.
	app/app.component.html -> "/users/{id}"				        CAN BE {id}.
	user-form/user-form.component.ts -> goToUser()		    CAN BE {id}.
	app/app.module.ts -> UserComponent					          NOT NEEDED CHANGE.
	app/app-routing.module.ts -> path : 'users/{id}'	    NUMBER.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
