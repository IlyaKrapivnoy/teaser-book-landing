import React from 'react';

const BookListItem = ({ title, description }) => {
    return (
        <>
            <div className='iconSide'>icon</div>
            <div className='textSide'>
                <div className='title'>{title}</div>
                <div className='description'>{description}</div>
            </div>
        </>
    );
};

export default BookListItem;
