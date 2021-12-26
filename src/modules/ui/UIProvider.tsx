import { format } from 'date-fns';
import { CustomProvider as RSuiteIntlProvider } from 'rsuite';
import es from 'rsuite/locales/es_ES';
import '@calvear/rsuite-styles';

const formatDate = (date: number | Date) => format(date, 'yyyy-MM-dd');

export const UIProvider: React.FC = ({ children }) => {
    return (
        <RSuiteIntlProvider locale={es} formatDate={formatDate}>
            {children}
        </RSuiteIntlProvider>
    );
};
