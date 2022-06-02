import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className={styles.contentWrapper}>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
