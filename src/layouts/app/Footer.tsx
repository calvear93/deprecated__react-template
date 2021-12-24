import { useRoutePayload } from '@router';

interface IFooterPayload {
    footer?: { text: string };
}

/**
 * Footer for App Layout.
 *
 * @returns {React.FC} footer component
 */
export const Footer: React.FC = () => {
    const { footer: { text } = {} } = useRoutePayload<IFooterPayload>();

    return <footer>{text}</footer>;
};
