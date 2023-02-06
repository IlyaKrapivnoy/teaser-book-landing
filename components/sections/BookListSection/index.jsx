import React from 'react';
import styles from './BookListSection.module.scss';
import BookListItem from '../../partials/BookListItem';
import { bookListItems } from '../../../data/bookListItems';

const BookListSection = () => {
    const firstCol = bookListItems.slice(0, 3);
    const secondCol = bookListItems.slice(3, 6);

    return (
        <div className='container'>
            <div className={styles.bookListSection}>
                <div className='titleField'>
                    <h3 className='title'>What&apos;s inside the book</h3>
                    <span className='description'>
                        Libero atque veniam molestiae ipsa aliquid quam facilis
                        dolore.
                    </span>
                </div>
            </div>
            <div className={styles.bookListWrapper}>
                <div className={styles.col1}>
                    {firstCol?.map(({ title, description, id }) => (
                        <BookListItem
                            key={id}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
                <div className={styles.col2}>
                    {secondCol?.map(({ title, description, id }) => (
                        <BookListItem
                            key={id}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookListSection;
