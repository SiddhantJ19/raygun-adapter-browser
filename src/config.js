
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

  return {set, get};
};

export default config();