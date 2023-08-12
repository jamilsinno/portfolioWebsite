import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import reviews from '../data/googleReviews';

const GoogleReviews = () => {
    return (
        <Carousel
            ariaLabel="Reviews"
            centerMode
            centerSlidePercentage={100}
            dynamicHeight
            showArrows={true} 
            swipeable={true}
            useKeyboardArrows={true}
        >
            {reviews.map((review, index) => (
                <section key={index}>
                    <h4>{review.body}</h4>
                    <div>
                        <span>{review.author}</span>
                        <span>{review.stars}</span>
                    </div>
                </section>
            ))}
        </Carousel>
    );
};

export default GoogleReviews;