import React from 'react';

export default function RatingStars({starsCount}) {
    const styles = {
        width: "1.3em",
        height: "auto"
    }

    return(
        <div>
            {starsCount > 0 ? <img style={styles} src="images/star_filled.png" /> : <img style={styles} src="images/star_empty.png" />}
            {starsCount > 1 ? <img style={styles} src="images/star_filled.png" /> : <img style={styles} src="images/star_empty.png" />}
            {starsCount > 2 ? <img style={styles} src="images/star_filled.png" /> : <img style={styles} src="images/star_empty.png" />}
            {starsCount > 3 ? <img style={styles} src="images/star_filled.png" /> : <img style={styles} src="images/star_empty.png" />}
            {starsCount > 4 ? <img style={styles} src="images/star_filled.png" /> : <img style={styles} src="images/star_empty.png" />}
        </div>
    );
}