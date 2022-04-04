import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='homepage-container'>
            <div className="article-part">
                <h1>Your next glass <br />
                    Your best glass
                </h1>
                <p>Sunglasses are designed to protect the eyes both from excessive light and from damaging UV light rays.Sunglasses are aimed at the young but they are more than a fashion statement, they play an essential role in protecting the eyes.</p>
            </div>
            <div className="img-part">
                <img src="https://www.linkpicture.com/q/a5a7a48b62ad37bb168c4e9a217bf781_1.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;