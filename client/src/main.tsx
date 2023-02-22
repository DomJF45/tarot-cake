import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
)
