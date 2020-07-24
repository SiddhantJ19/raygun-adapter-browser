import eventListener from './eventListener';
import interceptors from './interceptors';
import config from './config';

const init = (userConfig) => {
    
    config.set(userConfig);
    interceptors.enableAll();
    eventListener.enableUserInteractionsListener();
    eventListener.enableErrorListener();
};


export default {
    init,
};