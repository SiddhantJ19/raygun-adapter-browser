import userInteraction from './userInteractions';
import request from './request';
import config from './config';
import logs from './logs';
import timestamp from './timestamp'

const registerError = ({ message, stack: stacktrace }) => {
    const userConfig = config.get();
    
    if (!message || !stacktrace || !userConfig.ticket) {
        return;
    }
    
    const event = {
        ticket: userConfig.ticket,
        message,
        logs: logs.get(),
        type: 'error',
        userInteractions: userInteraction.get(),
        host: window.location.origin,
        stacktrace,
        timestamp: timestamp.generateUTCInSeconds()
    };
    console.log(event)
    request.sendError(event);
};

export default { registerError };