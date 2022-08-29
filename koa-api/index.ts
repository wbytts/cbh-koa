import moduleAlias from 'module-alias';
import path from 'path';
moduleAlias.addAlias('@', path.resolve(__dirname, 'src'));

import { runServer } from './src';
import config from '@/config';



runServer(config.server.port || 9999);
