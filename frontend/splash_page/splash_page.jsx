import React from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className="all-splash">
                <header className="splash-header">
                    <div className="splash-left-links">
                        <a href="#" className="splash-a">Write a Review</a>
                        <a href="https://github.com/Codename-Chris" className="splash-a">Github</a>
                        <a href="https://www.linkedin.com/in/christopher-garthright/" className="splash-a">LinkedIn</a>
                    </div>
                    <div className="splash-right-links">
                        <Link to="/login" className="splash-r-l">Log In</Link>
                        <Link to="/signup" className="splash-signup">Sign Up</Link>
                    </div>
                </header>
                <a href="#" className="splash-a-h1"><h1>Celp <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/dcb526e86d86/assets/img/logos/burst_desktop_xsmall_outline@2x.png" className="header-logo" /></h1></a>
                <form className="splash-form">
                    <label className="splash-label">
                        <span className="splash-span">Find</span>
                        <input 
                        type="text" 
                        onChange={this.update} 
                        placeholder="burgers,barbers,plumbers..."
                        className="splash-input"
                        />
                    </label>
                    <button type="submit" className="splash-but">Search</button>
                </form>
                <div className="splash-sub-links">
                    <a href='#' className="splash-sub-a">Resturants</a>
                    <a href='#' className="splash-sub-a">Barbers</a>
                    <a href='#' className="splash-sub-a">Home Services</a>
                    <a href='#' className="splash-sub-a">Delivery</a>
                </div>
                <div className="splash-img-cred">
                    <div className="cred-link">
                        <div className="cred-des">   
                            <a href="#" className="photo-des">
                                <p className="cred-text-1">Chris' Cronuts</p>
                            </a>
                        </div>
                        <div className="cred">
                            <p className="cred-text">Photo by</p>
                            <a href="#" className="photo-by">
                                <p className="cred-name">Codename_Chris</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default SplashPage;