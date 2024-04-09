class HttpError extends Error {
    constructor(message, errorCode) {
        super(message); //adds the message property
        this.code=errorCode;  //adds a code property
    }
}

module.exports =HttpError;
