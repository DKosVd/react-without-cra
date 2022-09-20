import React from "react";
import App from './components/App';
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";


const root = document.getElementById('root');
ReactDOM.render(<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>, root);


