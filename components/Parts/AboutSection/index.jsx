import React from 'react';
import Image from 'next/image';
import styles from '../PresentationalSection/PresentationalSection.module.scss';
import KindleImg from '../../../public/kindle.png';

const AboutSection = () => {
    return (
        <div className='container'>
            <div className={styles.wrapper}>
                <div className={styles.picturePart}>
                    <Image
                        src={KindleImg}
                        alt={'Kindle'}
                        width={400}
                        height={400}
                    />
                </div>
                <div className={styles.textPart}></div>
            </div>
        </div>
    );
};

export default AboutSection;
