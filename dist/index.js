'use strict';
import { ExpressAppConfig } from "./middleware/express.app.config";
export function expressAppConfig(definitionPath, appOptions, customMiddlewares) {
    return new ExpressAppConfig(definitionPath, appOptions, customMiddlewares);
}
//# sourceMappingURL=index.js.map