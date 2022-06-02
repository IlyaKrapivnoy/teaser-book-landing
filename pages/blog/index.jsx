import React from 'react';
import { getSession, useSession } from 'next-auth/react';

const Blog = ({ data }) => {
    const { data: session } = useSession();
    console.log({ session });

    return (
        <>
            <div>Blog Page - {data}</div>
        </>
    );
};

export default Blog;

export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log(session);

    return {
        props: {
            session,
            data: session
                ? 'List of 100 personalized blogs'
                : 'List of free blogs',
        },
    };
}
