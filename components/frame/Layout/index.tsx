import { ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../../partials/Navbar';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className={styles.contentWrapper}>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
