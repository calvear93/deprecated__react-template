import { useRoutePayload } from '@router';

interface IFooterPayload {
    footer?: { text: string };
}

/**
 * Footer for App Layout.
 *
 * @returns {JSX.Element} footer component
 */
export const Footer: React.FC = (): JSX.Element => {
    const { footer: { text } = {} } = useRoutePayload<IFooterPayload>();

    return <footer>{text}</footer>;
};
