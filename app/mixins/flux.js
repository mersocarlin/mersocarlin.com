import 'setimmediate';


export default {

  statics: {
    executeAction (action, payload) {
      setImmediate(action.bind(null, payload));
    }
  },

  componentDidMount () {
    this.listeners = [];
    this.getListeners().forEach(listener => {
      this._attachStoreListener(listener);
    });
  },

  componentWillUnmount () {
    this.listeners.forEach(listener => {
      listener.store.removeChangeListener(listener.handler);
    });
    this.listeners = [];
  },

  getListeners () {
    const storeListeners = this.constructor.storeListeners;
    if (storeListeners) {
      return Object.keys(storeListeners).reduce((accum, handlerName) => {
        accum.push({ store: storeListeners[handlerName], handler: this[handlerName] });
        return accum;
      }, []);
    }
    return [];
  },

  _attachStoreListener (listener) {
    listener.store.addChangeListener(listener.handler);
    this.listeners.push(listener);
  },

  executeAction (action, payload) {
    setImmediate(action.bind(null, payload));
  }

};
