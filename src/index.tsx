import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './index.scss';
import App from './App';
import MainLayout from './components/MainLayout';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MainLayout>
      <App />
    </MainLayout>
  </Provider>,
  document.getElementById('root'),
);
