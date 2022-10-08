import '$styles';
import react from 'react';
import ReactDOM from 'react-dom/client';
import Router from '$routes/Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <react.StrictMode>
    <Router />
  </react.StrictMode>
);
