import { Footer } from './Footer';
import { Header } from './Header';
import './app-layout.scss';

/**
 * App layout (wrapper for pages with header/footer).
 *
 * @returns {JSX.Element} app layout
 */
export const AppLayout: React.FC = ({ children }): JSX.Element => (
    <main id='app-layout'>
        <Header />

        {children}

        <Footer />
    </main>
);

export default AppLayout;
