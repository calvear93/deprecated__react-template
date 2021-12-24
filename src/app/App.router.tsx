import { Router } from '@router';

/**
 * Application main routing handler.
 *
 * Here you can define logic for authorization
 * redirection or app splitting.
 *
 * @returns {React.FC} application main router
 */
export const AppRouter: React.FC = () => {
    return <Router loader={<h1>Loading</h1>} />;
};
