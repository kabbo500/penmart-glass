import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <h1>Blogs site</h1>
            <article className='blogs'>
                <div className='blog'>
                    <h1>1. What is context API?</h1>
                    <p><b>Ans:</b>Context provides a way to pass data through the component tree without having to pass props down manually at every level.The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application.Any situation where you have to pass a prop through a component so it reaches another component somewhere down the tree is where you can use the Context API.In React application, we passed data in a top-down approach via props. Sometimes it is inconvenient for certain types of props that are required by many components in the React application. Context provides a way to pass values between components without explicitly passing a prop through every level of the component tree. </p>
                </div>
                <div className='blog'>
                    <h1>2. What is Semantic tag?</h1>
                    <p><b>Ans: </b>Semantic tag or semantic markup is HTML that introduces meaning to the web page rather than just presentation.For example, a "p" tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.Semantic tagging serves the goal of describing a document in order to facilitate better retrieval later on. </p>
                </div>
            </article>
        </div>
    );
};

export default Blogs;