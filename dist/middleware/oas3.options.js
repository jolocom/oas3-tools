import { LoggingOptions } from './logging.options';
export class Oas3AppOptions {
    constructor(routingOpts, openApiValidatorOpts, logging, swaggerUI) {
        this.routing = routingOpts;
        this.openApiValidator = openApiValidatorOpts;
        this.swaggerUI = swaggerUI;
        if (!logging)
            logging = new LoggingOptions(null, null);
        this.logging = logging;
    }
}
//# sourceMappingURL=oas3.options.js.map