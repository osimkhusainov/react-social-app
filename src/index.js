
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

let renderMessage = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <Provider store={store}>
          <App store={store}/>
        </Provider>
      </BrowserRouter>,
      document.getElementById('root')
    );
  };
  // state={store.getState()} dispatch={store.dispatch.bind(store)}
export default renderMessage;


renderMessage(store.getState());

store.subscribe( () => {
    let state = store.getState();
    renderMessage(state);
});





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
