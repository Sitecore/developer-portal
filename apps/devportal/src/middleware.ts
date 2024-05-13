import { aspxExtension } from './middlewares/aspxExtension';
import { mediaHandler } from './middlewares/mediaHandler';
import { stackMiddlewares } from './middlewares/stackHandler';
import { underscore } from './middlewares/underscore';

const middlewares = [aspxExtension, underscore, mediaHandler];

export default stackMiddlewares(middlewares);