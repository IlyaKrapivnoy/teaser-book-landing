import React from 'react';
import styles from './BookListSection.module.scss';

const BookListSection = () => {
    return (
        <div className='container'>
            <div className={styles.booklistSection}>
                <div className='titleField'>
                    <h3 className='title'>What&apos;s inside the book</h3>
                    <span className='description'>
                        Libero atque veniam molestiae ipsa aliquid quam facilis
                        dolore.
                    </span>
                </div>
            </div>
            <div className='wrapper'>ss</div>
        </div>
    );
};

export default BookListSection;
