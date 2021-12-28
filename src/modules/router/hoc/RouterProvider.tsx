import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';
import { IRouteDefinition } from '../interfaces/IRouteDefinition';
import { routerService } from '../router.service';

export interface IRouterProviderProps
    extends Omit<BrowserRouterProps, 'basename'> {
    routes: readonly IRouteDefinition[];

    basePath?: string;

    defaultChild?: React.ReactNode;
}

/**
 * Initializes application routes.
 *
 * @param {IRouterProviderProps} props
 *
 * @returns {JSX.Element} router provider HOC
 */
export const RouterProvider: React.FC<IRouterProviderProps> = ({
    children,
    routes,
    basePath,
    defaultChild,
    ...rest
}): JSX.Element => {
    // initializes the routes
    routerService.setRoutes(routes, defaultChild);

    return (
        <BrowserRouter basename={basePath} {...rest}>
            {children}
        </BrowserRouter>
    );
};
