import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { UIProvider } from '@ui';
import { RouterProvider } from '@router';
import { AppStore } from './App.store';
import { AppRouter } from './App.router';
import { routes } from './app.routes';
import '@web-font';
import './styles/app.scss';

/**
 * App container.
 *
 * Here occur the initialization
 * and localization of some libs.
 *
 * @returns {React.FC} app container
 */
export const App: React.FC = () => {
    return (
        <UIProvider>
            <RouterProvider
                routes={routes}
                basePath={process.env.REACT_APP_BASE_PATH}
            >
                <Provider store={AppStore}>
                    <AppRouter />
                </Provider>

                <ToastContainer />
            </RouterProvider>
        </UIProvider>
    );
};

/**
 * if you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://cra.link/PWA
 */
if (process.env.REACT_APP_SERVICE_WORKER === 'true')
    require('./config/service-worker.register').register();
