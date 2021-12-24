import { ReactComponent as Logo } from 'app/assets/logo.svg';
import { Button } from 'rsuite';
import { useAsyncFetch } from '../hooks/useAsyncFetch.hook';
import styles from './detail.module.scss';

export const FetchBox: React.FC = () => {
    const [{ loading, content }, dispatchFetch] = useAsyncFetch();

    return (
        <div className={styles.box}>
            <Logo style={{ height: 128, width: 128 }} className={styles.logo} />
            <Button
                className={styles.button}
                appearance='primary'
                loading={loading}
                onClick={dispatchFetch}
            >
                Fetch
            </Button>
            {loading ? <h4>Fetching Data</h4> : <h4>{content.anyProp}</h4>}
        </div>
    );
};
