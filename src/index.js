import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = 'api';

    this.get("/transactions", () => {
    return [
          { id: 1,
            description: 'Compras',
            amount: 100,
            expense: true, },
          { id: 2,
            description: 'Salário',
            amount: 200,
            expense: false, }
    ]})
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

