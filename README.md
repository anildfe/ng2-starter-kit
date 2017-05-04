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
