import config from './config';

const sendError = (event, eventType = 'error') => {
  const req = new XMLHttpRequest();
  console.log(event)
  const host = config.get().instance;
  const slug = '/logging/' + eventType;

  req.open('POST', host + slug, eventType === 'error');
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify(event));

  req.onreadystatechange = function() {
    if (this.readyState === 4 && this.status !== 200) {
      console.error(
          'failed to send event with error:', this.statusText);
    }
  }
};


export default {sendError};