import { useRoutePayload } from '@router';

interface IHeaderPayload {
    header?: { title: string };
}

/**
 * Header for App Layout.
 *
 * @returns {React.FC} header component
 */
export const Header: React.FC = () => {
    const { header: { title } = {} } = useRoutePayload<IHeaderPayload>();

    return <header>{title}</header>;
};
