// More codes at http://webmaster.iu.edu/tools-and-guides/maintenance/error-codes.phtml

export enum Response {
    OK = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    BadRequest = 400,
    Unauthorised = 401,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    UnsupportedMediaType = 415,
    ServerError = 500,
    NotImplemented = 501,
    BadGateway = 502
}

export class ErrorItem {
    message:string;
    item:string;

    constructor(message:string, item?:string) {
        this.message = message;

        if (item)
            this.item = item;
    }
}

class Error {
    code:Response;
    data:ErrorItem;

    constructor(code:Response) {
        this.code = code;
    }
}

export class UnauthorisedError extends Error {
    constructor(message:string) {
        super(Response.Unauthorised);

        this.data = new ErrorItem(message);
    }
}

export class BadRequestError extends Error {
    constructor(message:string) {
        super(Response.BadRequest);

        this.data = new ErrorItem(message)
    }
}

export class ForbiddenError extends Error {
    constructor(message:string) {
        super(Response.Forbidden);

        this.data = new ErrorItem(message)
    }
}