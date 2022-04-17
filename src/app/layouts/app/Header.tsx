import { useRoutePayload } from '@router';

interface IHeaderPayload {
    header?: { title: string };
}

/**
 * Header for App Layout.
 *
 * @returns {JSX.Element} header component
 */
export const Header: React.FC = (): JSX.Element => {
    const { header: { title } = {} } = useRoutePayload<IHeaderPayload>();

    return <header>{title}</header>;
};
