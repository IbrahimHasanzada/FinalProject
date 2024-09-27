import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import './CSS/style.css';
import './CSS/CategorySlider.css';
import { RouterProvider } from 'react-router-dom';
import store from './Store/store';
import { Provider } from 'react-redux';
import route from './Router/route';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelmetProvider>
        <Provider store={store}>
            <RouterProvider router={route} />
        </Provider>
    </HelmetProvider>
);
