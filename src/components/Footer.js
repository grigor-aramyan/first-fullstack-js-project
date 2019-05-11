import React from 'react';

export default function Footer() {
    const footerStyle = {
        backgroundColor: "black",
        color: "white",
        height: "20vh",
        
    }

    return(
        <div className="mt-5 pt-2 row" style={footerStyle}>
            <div className="col-2 offset-7">
                <ul className="list-unstyled">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
            <div className="col-3">
                <p className="small">&copy; Hostel Booking, 2019</p>
                <span className="small">Azatutyan str 20, Yerevan, Armenia</span>
            </div>
        </div>
    );
}