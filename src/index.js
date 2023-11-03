import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import cartReducer from './redux/cartReducer';

const store = createStore(cartReducer);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
