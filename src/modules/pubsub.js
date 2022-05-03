const pubsub = (function() {
  const events = {};

  function publish(event, ...args) {
    if (!events[event]) {
      return
    }
    events[event].forEach(handler => handler(...args))
  }


  function subscribe(event, handler) {
    if (!events[event]) {
      events[event] = [];
    }

    events[event].push(handler);
  }


  function unsubscribe(event, handler) {
    const indexOfUnsubscribed = events[event].indexOf(handler);

    if (indexOfUnsubscribed > 0) 
      events[event].splice(indexOfUnsubscribed, 1);
  }

  return {publish, subscribe, unsubscribe}
 })();

 export default pubsub