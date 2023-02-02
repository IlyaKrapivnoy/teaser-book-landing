import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const SignInAndOut = () => {
    const { data: session, status } = useSession();

    const handleSignIn = (e) => {
        e.preventDefault();
        signIn('github');
    };

    const handleSignOut = (e) => {
        e.preventDefault();
        signOut();
    };

    return (
        <div
            className={classNames(
                styles.btnSection,
                !session && status === 'loading'
                    ? styles.loading
                    : styles.loaded
            )}
        >
            {!session && status !== 'authenticated' && (
                <Link href='/api/auth/signin'>
                    <a className='signinBtn' onClick={(e) => handleSignIn(e)}>
                        Sign In
                    </a>
                </Link>
            )}
            {session && status !== 'unauthenticated' && (
                <Link href='/api/auth/signout'>
                    <a className='signinBtn' onClick={(e) => handleSignOut(e)}>
                        Sign Out
                    </a>
                </Link>
            )}
        </div>
    );
};

export default SignInAndOut;
