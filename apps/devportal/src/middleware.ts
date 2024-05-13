import { lowercaseDownloads } from './middlewares/lowercaseDownloads';
import { mediaHandler } from './middlewares/mediaHandler';
import { stackMiddlewares } from './middlewares/stackHandler';
import { underscore } from './middlewares/underscore';

const middlewares = [lowercaseDownloads, underscore, mediaHandler];
export default stackMiddlewares(middlewares);
