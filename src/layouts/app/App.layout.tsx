import { memo } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './app.layout.module.scss';

/**
 * App layout (wrapper for pages with header/footer).
 *
 * @returns {JSX.Element} app layout
 */
export const AppLayout: React.FC = ({ children }): JSX.Element => (
    <main className={styles.layout}>
        <Header />

        {children}

        <Footer />
    </main>
);

export default memo(AppLayout);
