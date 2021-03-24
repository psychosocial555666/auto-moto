import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.scss';
import App from './js/components/App';
import {createStore} from "redux";
import reducer from "./js/reducer/reducer";
import {Provider} from "react-redux";

const store = createStore(
  reducer,
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.querySelector(`#root`)
);
