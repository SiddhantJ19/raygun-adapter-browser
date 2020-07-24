import broker from './broker';
import constants from './constants';
import userInteractions from './userInteractions';


const enableErrorListener = () => {
  window.addEventListener('error', (e) => {
    const {message, error} = e;
    const errorEvent = {
      message,
      stack: error.stack,
      constructor: error.constructor
    };

    broker.registerError(errorEvent);
  });
};

const enableUserInteractionsListener = () => {
  const focusableElements = constants.focusableElements;

  const focusInListener = (e) => {
    const tagName = e.target.tagName.toLowerCase();

    if (focusableElements.includes(tagName)) {
      userInteractions.add(e);
    }
  };

  const clickListener = (e) => {
    const tagName = e.target.tagName.toLowerCase();

    // TODO: why not
    if (!focusableElements.includes(tagName)) {
      userInteractions.add(e);
    }
  };

  window.addEventListener('focusin', focusInListener);
  document.addEventListener('click', clickListener)
};



export default {
  enableErrorListener,
  enableUserInteractionsListener,
};