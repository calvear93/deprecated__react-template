import { CustomProvider as RSuiteIntlProvider } from 'rsuite';
import { formatDate } from '@libs/time.lib';
import es from 'rsuite/locales/es_ES';
import '@calvear/rsuite-styles';

export const UIProvider: React.FC = ({ children }) => {
    return (
        <RSuiteIntlProvider locale={es} formatDate={formatDate}>
            {children}
        </RSuiteIntlProvider>
    );
};
