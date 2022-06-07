import React from 'react';
import styles from './PresentationalSection.module.scss';

const PresentationalSection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textPart}>
                <p>
                    <span>50% discount</span>on early purchase
                </p>
                <h1>The Man in the Glass House</h1>
                <p>A great landing page to sell your eBook!</p>
                <p>
                    We work with our partners to streamline project plans that
                    don’t just deliver on product perfection, but also delivers
                    on time.
                </p>
                <button>Buy now for $14.99</button>
                <p>* eBook includes iBooks, PDF & ePub versions</p>
            </div>
            <div className={styles.picturePart}>pic</div>
        </div>
    );
};

export default PresentationalSection;
