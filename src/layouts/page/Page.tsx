import './page.scss';

export interface IPageProps {
    id: string;

    children?: React.ReactNode | React.ReactNode[];
}

/**
 * Page.
 *
 * @returns {React.FC<IPageProps>} page layout
 */
export const Page: React.FC<IPageProps> = ({ id, children }) => (
    <section id={id} className='page'>
        {children}
    </section>
);
