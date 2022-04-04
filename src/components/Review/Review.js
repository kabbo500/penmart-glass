import React from 'react';
import './Review.css'
const Review = (props) => {
    const { name, review, rating } = props.review;
    return (
        <div className='review'>
            <div>
                <h3>Name: {name}</h3>
                <p><b>Review:</b> {review}</p>
                <h5>Rating: {rating}</h5>
            </div>
        </div>
    );
};

export default Review;