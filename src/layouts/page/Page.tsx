import './page.scss';

/**
 * A generic page.
 *
 * @param {React.HTMLProps<HTMLElement>} props
 *
 * @returns {JSX.Element} page
 */
export const Page: React.FC<React.HTMLProps<HTMLElement>> = ({
    children,
    ...rest
}): JSX.Element => (
    <section className='page' {...rest}>
        {children}
    </section>
);
