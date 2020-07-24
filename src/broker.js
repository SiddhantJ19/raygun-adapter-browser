import userInteraction from './userInteractions';
import request from './request';
import config from './config';
import capturedlogs from './logs';
import timestamp from './timestamp'

const registerError = ({ message, stack: stacktrace }) => {
    const userConfig = config.get();
    
    if (!message || !stacktrace || !userConfig.ticket) {
        return;
    }
    
    const event = {
        ticket: userConfig.ticket,
        message,
        logs: capturedlogs.get(),
        type: 'error',
        userInteractions: userInteraction.get(),
        stacktrace,
        timestamp: timestamp.generateUTCInSeconds()
    };
    request.sendError(event);
    
};

export default { registerError };