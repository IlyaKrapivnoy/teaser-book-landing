import React from 'react';
import styles from './BookListSection.module.scss';
import BookListItem from '../../partials/BookListItem';

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
            <div className='wrapper'>
                <BookListItem
                    title='Design principles'
                    description='Tips on scouting the city and making the most out of your three-month tourist visa.'
                />
            </div>
        </div>
    );
};

export default BookListSection;
