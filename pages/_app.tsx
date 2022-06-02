import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    );
}

export default MyApp;
