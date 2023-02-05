import React from 'react';
import Icon from '../../../icons';
import styles from './BookListItem.module.scss';

type BookListItemProps = {
    title: string;
    description: string;
};

const BookListItem: React.FC<BookListItemProps> = ({ title, description }) => (
    <div className={styles.card}>
        <div className={styles.iconSide}>
            <Icon name={Icon.DONE} sizes={{ height: 24, width: 'auto' }} />
        </div>
        <div className='textSide'>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    </div>
);

export default BookListItem;
