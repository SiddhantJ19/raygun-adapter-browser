
const config = () => {
  let _config = {};

  const set = (config = {}) => {
    if (typeof config !== 'object' || config.constructor !== Object) {
      throw new Error('Provided config is an invalid object');
    }
    if (!config.ticket || typeof config.ticket !== 'string' ||
        config.ticket.length !== 50) {
      throw new Error('Invalid Raygun ticket');
    }
    _config = config;
  };

  const get = () => _config;

  const serveTest = (event, eventType) => {
    const req = new XMLHttpRequest();
    const url = 'http://localhost:8000/api/logging/error';
    event.log = event.logs[event.logs.length - 1].log;
    console.log("From django,", event.log);
    try {
      req.open('POST', url, eventType === 'error');
      req.setRequestHeader('Content-Type', 'application/json');
      req.send(JSON.stringify(event));
    } catch (error) {console.error(error)}
  }

  return {set, get, serveTest};
};

export default config();