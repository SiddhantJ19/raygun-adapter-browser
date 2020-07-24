import timestamp from './timestamp'

const logs = () => {
  const logs = [];

  const add = (log) => {
    if (typeof log !== 'string') {
      return;
    }
    if (log.length >= 1000) {
      log = log.slice(0, 990) + '...';
    }

    logs.push({timestamp: timestamp.generateUTCInSeconds(), type: 'log', log});

    if (logs.length > 15) {
      logs.shift();
    }
  };
  const get = () => logs;

  return {add, get};
};

export default logs();