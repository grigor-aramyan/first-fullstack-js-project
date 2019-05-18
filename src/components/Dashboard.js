import React, { Component } from 'react';
import Footer from './Footer';

export default class Dashboard extends Component {
    render() {
        return(
            <div>
                
                <div className="container">
                    Dashboard for logged-in user!
                    <Footer />
                </div>
                
            </div>
        );
    }
}