import timestamp from './timestamp'

const userInteractions = () => {
  const userInteractions = [];
  const add = (e) => {

    const userInteraction = {
      innerText: e.target.innerText || '',
      timestamp: timestamp.generateUTCInSeconds(),
      element: e.target.tagName.toLowerCase(),
      elementId: e.target.id || '',
      location: window.location.pathname || ''
    };

    userInteractions.push(userInteraction);

    // only store latest 25 interactions
    if (userInteractions.length > 25) {
      userInteractions.shift();
    }
  };

  const get = () => userInteractions;

  return {add, get};
};

export default userInteractions();