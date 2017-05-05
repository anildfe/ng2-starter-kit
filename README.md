# ng2-starter-kit
A starter kit and a sample application for Angular 2


    # Setup our base project:

    create index.html
        touch index.html

    create package.json with defaults
        npm init --yes

    Install lite-server:
        npm install --save-dev lite-server

    Create an npm script in package.json to start lite-server.
        "scripts": {
            "lite": "lite-server"
        }

    Run server
        npm run lite

    # TypeScript Setup

    Install TypeScript with typings
        npm install --save-dev typescript @types/node @types/jasmine @types/core-js

    Create a tsconfig.json for TypeScript
        {
            "compilerOptions": {
            "target": "es5",
            "module": "commonjs",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false,
            "lib": ["es2015", "dom"]
            }
        }

    Update scripts in package.json
        "scripts": {
            "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\"",
            "lite": "lite-server",
            "tsc": "tsc",
            "tsc:w": "tsc -w"
        },

    Install concurrently
        npm install --save-dev concurrently

    Run server
        npm start

    # Angular 2 Dependencies

        core-js client/shim: Adds es6 features to browsers that don't have them

        zone.js: An execution context. Helps with change detection and showing errors. Anyone from angular 1 will know that seeing console errors and trying to debug was near impossible. Provides stack traces. Helps Angular run change detection throughout our app.

        reflect-metadata: Polyfill for decorator metadata. Used to apply decorators to our code (Component is a decorator). A clean way of adding metadata to our classes.

        rxjs: Libraries that help create asynchronous data streams. Gives us Observables. The Angular 2 http library uses these heavily and is the preferred way of handling async events in Angular 2.

    Install all Dependencies
        npm install core-js reflect-metadata zone.js rxjs@5.0.0-beta.12 systemjs --save

    # Angular 2 packages

    The main packages are:
        @angular/core
        @angular/common
        @angular/compiler
        @angular/platform-browser
        @angular/platform-browser-dynamic

    The optional packages that are a good idea to bring into your apps as you'll most likely use them:
        @angular/router
        @angular/http
        @angular/forms

    Install them all with a single command
        npm install @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic @angular/forms @angular/http @angular/router --save

    #system.js

    create a systemjs.config.js

    load script dependencies in index.html

    # First Angular 2 application

    Getting started with Angular 2 requires three major files.

        app.component.ts: The main component that encompasses our entire app.
        app.module.ts: The top level module for our app. The module defines a certain section of our site. In this case, our entire site is the module.
        main.ts: This is where we bootstrap our app. This is similar to using ng-app in Angular 1.    
