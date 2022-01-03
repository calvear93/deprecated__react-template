import { IRouteDefinition } from '@router';
import { lazy } from 'react';

// layouts container
const Layouts = {
    App: lazy(() => import('layouts/app/App.layout'))
};

// pages container
const Pages = {
    Main: lazy(() => import('pages/main/Main.page')),
    Detail: lazy(() => import('pages/detail/Detail.page'))
};

/**
 * Routes definition.
 *
 * Here you must define your app routes
 * per namespace.
 * A namespace helps you to organize your
 * routes, for example 'app', 'public',
 * 'private', etc.
 *
 * This routes should be used in createRouter
 * function from @router module.
 */
export const routes: Record<string, IRouteDefinition[]> = {
    app: [
        {
            path: '/',
            render: {
                layout: Layouts.App,
                children: [
                    // root/home page
                    {
                        title: 'Home',
                        render: {
                            child: Pages.Main
                        }
                    },
                    // detail page
                    {
                        path: 'detail',
                        title: 'Detail',
                        render: {
                            child: Pages.Detail,
                            children: [
                                // detail page with param
                                {
                                    title: 'Detail Param',
                                    path: ':id', // /detail/:id
                                    render: {
                                        child: Pages.Detail
                                    }
                                }
                            ]
                        },
                        payload: {
                            header: {
                                title: 'HEADER DETAIL'
                            },
                            footer: {
                                text: 'FOOTER DETAIL'
                            }
                        }
                    }
                ]
            },
            payload: {
                header: {
                    title: 'HEADER BASE'
                },
                footer: {
                    text: 'FOOTER BASE'
                }
            }
        }
    ]
};
