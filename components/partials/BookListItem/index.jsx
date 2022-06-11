import React from 'react';
import Icon from '../../../icons';

const BookListItem = ({ title, description }) => {
    return (
        <>
            <div className='iconSide'>
                <Icon name={Icon.DONE} sizes={{ height: 24, width: 'auto' }} />
            </div>
            <div className='textSide'>
                <div className='title'>{title}</div>
                <div className='description'>{description}</div>
            </div>
        </>
    );
};

export default BookListItem;
