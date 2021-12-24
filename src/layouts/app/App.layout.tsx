import { Footer } from './Footer';
import { Header } from './Header';
import './app-layout.scss';

/**
 * App layout (wrapper for pages with header/footer).
 *
 * @param {IAppLayoutProps} props
 *
 * @returns {React.FC<IAppLayoutProps>} app layout
 */
export const AppLayout: React.FC = ({ children }) => (
    <main id='app-layout'>
        <Header />

        {children}

        <Footer />
    </main>
);

export default AppLayout;
