import Head from 'next/head';
import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import PresentationalSection from '../../sections/PresentationalSection/PresentationalSection';
import AboutSection from '../../sections/AboutSection';
import BookListSection from '../../sections/BookListSection';

function Home() {
    const { status } = useSession();

    useEffect(() => {
        if (status === 'unauthenticated') {
            signIn();
        }
    }, [status]);

    if (status !== 'authenticated') {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <Head>
                <title>Book Teaser Website</title>
                <meta
                    name='description'
                    content='For those who likes to read'
                />
            </Head>

            <main>
                <PresentationalSection />
                <AboutSection />
                <BookListSection />
            </main>
        </>
    );
}

export default Home;
