import '../styles/main.scss';
import Layout from '../components/main/Layout/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />;
        </Layout>
    );
}

export default MyApp;
