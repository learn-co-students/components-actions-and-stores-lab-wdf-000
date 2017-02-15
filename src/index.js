import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './store';
import bandReducer from './reducers/band_reducer';
import BandInput from './components/band_input_component';

const store = createStore(bandReducer);

const renderApp = () => {
  ReactDOM.render(<BandInput store={store} />, document.getElementById('container'))
}

store.subcribe(renderApp);
store.dispatch({});

