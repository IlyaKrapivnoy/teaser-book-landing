import React from 'react';

const Copyright = () => {
    const data = new Date().getFullYear();

    return (
        <p className={styles.copyright}>
            &#169; Copyright Ilya K. All rights reserved {data}
        </p>
    );
};

export default Copyright;
