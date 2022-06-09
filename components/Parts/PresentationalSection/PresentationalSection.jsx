import React from 'react';
import Image from 'next/image';
import styles from './PresentationalSection.module.scss';
import BookCoverImg from '../../../public/book-cover.png';

const PresentationalSection = () => {
    return (
        <div className='container'>
            <div className={styles.wrapper}>
                <div className={styles.textPart}>
                    <p className={styles.supText}>
                        <span>50% discount</span> on early purchase
                    </p>
                    <h1>The Man in the Glass House</h1>
                    <p className={styles.subText}>
                        A great landing page to sell your eBook!
                    </p>
                    <p>
                        We work with our partners to streamline project plans
                        that don’t just deliver on product perfection, but also
                        delivers on time.
                    </p>
                    <button>Buy now for $14.99</button>
                    <p className={styles.footnote}>
                        * eBook includes iBooks, PDF & ePub versions
                    </p>
                </div>
                <div className={styles.picturePart}>
                    <Image
                        src={BookCoverImg}
                        alt={'Book cover'}
                        width={370}
                        height={503}
                    />
                </div>
            </div>
        </div>
    );
};

export default PresentationalSection;
