import React from 'react';
import RatingStars from './RatingStars';

export default function OfferingsListItem({data}) {
    const { title, description, picturesList, price, bookDate, bookDays, stars } = data;

    const rand = Math.random();
    let picUri = '';
    if (rand < .3) {
        picUri = picturesList[0];
    } else if (rand >= .3 && rand < .7) {
        picUri = picturesList[1];
    } else {
        picUri = picturesList[2];
    }
    return (
        <div className="col-3 m-1">
            {picturesList[0] ? <img src={picUri} className="card-img-top" alt="hostel lead image" /> : <span />}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">
                        {title}
                    </h5>
                    <p className="card-text">
                        {description}
                    </p>
                    <p className="card-text">
                        Price: ${price}
                    </p>
                    <p className="card-text">
                        <RatingStars starsCount={stars} />
                    </p>
                    <a href="#" className="card-link">View Details</a>
                </div>
            </div>
        </div>
    );
}