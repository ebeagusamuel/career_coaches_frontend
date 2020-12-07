import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import store from './store';
import { autoLogin } from './feature/auth/authSlice';
import './index.css';
import App from './App';

const userObj = JSON.parse(window.localStorage.getItem('userObj'));
if (userObj) {
  const { token } = userObj;
  store.dispatch(autoLogin(token));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
