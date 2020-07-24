import broker from './broker';
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
  const focusableElements = ['button', 'details', 'input', 'iframe', 'select', 'textarea'];

  const focusInListener = (e) => {
    const tagName = e.target.tagName.toLowerCase();

    if (focusableElements.includes(tagName)) {
      userInteractions.add(e);
    }
  };

  const clickListener = (e) => {
    const tagName = e.target.tagName.toLowerCase();

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