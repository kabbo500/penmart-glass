import React from 'react';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='home'>

            <h1>Welcome to Lenscart Bangladesh</h1>


            <div className='homepage-container'>
                <div className="article-part">
                    <h1>Your next glass <br />
                        <span className='second-part'>Your best glass</span>
                    </h1>
                    <p>Sunglasses are designed to protect the eyes both from excessive light and from damaging UV light rays.Sunglasses are aimed at the young but they are more than a fashion statement, they play an essential role in protecting the eyes.</p>
                </div>
                <div className="img-part">
                    <img src="https://www.linkpicture.com/q/a5a7a48b62ad37bb168c4e9a217bf781_1.jpg" alt="" />
                </div>
            </div>

            <div>
                <h2>What our customers say! ({reviews.slice(0, 3).length})</h2>
                <div className='reviews'>
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
            </div>

            <div>
                <button className='reviews-btn'><a href="reviews">See all reviews</a></button>
            </div>

        </div>
    );
};

export default Home;