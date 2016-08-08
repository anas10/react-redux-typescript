import * as express from 'express'
import * as Http from './Utils/Http'

module.exports = (app:express.Application, router:express.Router) => {
    const
        bodyParser = require('body-parser'),
        cookieParser = require('cookie-parser');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cookieParser());

    router.use((req:express.Request, res:express.Response, next:express.NextFunction) => {
        // @TODO add logging?
        next();
    });

    router.get('/test', (req:express.Request, res:express.Response) => {
        res.sendStatus(Http.Response.Accepted);
    });

    // require('./Routes/Content')(router);

    app.use('/api', router);
};