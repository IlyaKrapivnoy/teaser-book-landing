import Head from 'next/head';
import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import PresentationalSection from '../Sections/PresentationalSection/PresentationalSection';
import AboutSection from '../Sections/AboutSection';
import BookListSection from '../Sections/BookListSection';

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
        <div>
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
        </div>
    );
}

export default Home;
