import React from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';

const Advertisement = () => {
    const { data: session, status } = useSession();
    console.log({ session, status });

    return (
        <>
            <Head>
                <title>Add Book Teaser</title>
                <meta name='description' content='Description of a new book' />
            </Head>

            <div>Welcome, {session ? session.user.name : 'user'}</div>
        </>
    );
};

export default Advertisement;
