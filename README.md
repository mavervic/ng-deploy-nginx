# NgDeployNginx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## 如何將此專案部屬到bitnami/nginx或nginx/alpine的子目錄上

1. ng build --base-href /abc/
2. docker image build -t abctest .
3. docker container run -p 4200:4200 abctest

## binami/nginx image

https://hub.docker.com/r/bitnami/nginx

## nginx/alpine image

https://hub.docker.com/_/nginx


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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
