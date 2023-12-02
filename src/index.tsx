import ReactDOM from 'react-dom/client';
import App from 'app/App';
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import { store } from 'entities/redux/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <Provider store={store}>
  <App />
  </Provider>
);
