import React from 'react';
import { Link } from 'react-router-dom';


class BusinessesIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <header>
                    <Link to="/" className="header-link"><h1>Celp <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/dcb526e86d86/assets/img/logos/burst_desktop_xsmall_outline@2x.png" className="header-logo" /></h1></Link>
                </header>
                <h3>This will be the Businesses Index Page!</h3>
            </div>
        )
    };
};

export default BusinessesIndex;