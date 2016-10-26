## To Install

Please make sure you have the **yarn package manager**.

    npm install yarn -g

Then:

    git clone git@github.com:slavomirvojacek/react-redux-typescript.git
    yarn install
    
    # Hack to resolve all react-router dependencies
    cd node_modules/react-router && npm install && cd ../..
    
    # Set up .env files properly
    cp .env.example .env
    cp .env .env.production
    
Update `.env.production` so the value of **NODE_ENV** is `production`
    
## To Run

    npm start
    
## Tests

    npm test

## Production build

First compile everything into `./dist`:

    npm run compile:src
    # Alias for ./bin/compile-src
    
This compiles the React App and copies over css, images, and fonts.

And then to serve:

    npm run serve:prod
    # Alias for ./bin/serve-app-prod

## Architecture

### JS / TS

**All JavaScript lives in `./src`.**

For a simple Component example, visit `./src/Welcome/Component.tsx`. For a more comprehensive example of a connected component, visit `./src/Shared/Notification`.

To introduce a new Reducer, remember to add it into `./src/configureStoreAndHistory.ts` (following the NotificationReducer example).

### CSS / Sass

**All CSS lives in `./public/css`.**

The Sass project is built on top of Google Material Design (`./public/css/src/vendor/materialize-src`), however all custom styling is located in the root of `./public/css/src`.

In order to compile sass and minify the resulting css, run

    npm run compile:sass && npm run clean:css
    
When developing, I suggest running

    npm run watch:sass
    
in a separate shell so CSS is emitted whenever a `.sass` or `.scss` file is changed.
