import '$styles';
import '$webtorrent';
import App from './App';
import react from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <react.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </react.StrictMode>
);
