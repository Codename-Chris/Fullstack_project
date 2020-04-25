import React from 'react';
import { Link } from 'react-router-dom';
import BusinessIndexItem from './businesses_index_item'
import BusinessMap from '../map/business_map';



class BusinessesIndex extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        // this.props.? (this.state)
    };
    
    componentDidMount() {
        // debugger
        this.props.fetchBusinesses()
    }

    render() {
        // debugger
        return (
            // <div>
            //     <header>
            //         <Link to="/" className="header-link"><h1>Celp <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/dcb526e86d86/assets/img/logos/burst_desktop_xsmall_outline@2x.png" className="header-logo" /></h1></Link>
            //     </header>
            //     <h3>This will be the Businesses Index Page!</h3>
            // </div>
            <>
                <header className="biz-index-header">
                    <div className="index-head">
                        <Link to="/" className="biz-header-link">
                            <h1>Celp <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/dcb526e86d86/assets/img/logos/burst_desktop_xsmall_outline@2x.png" className="biz-header-logo" /></h1>
                        </Link>

                        <div className="biz-search-button">
                            <form className="biz-form-search" onSubmit={this.handleSubmit}>
                                <div className="biz-find-div">
                                    {/* <label className="biz-find">Find */}
                                        <input 
                                        type="text"
                                        placeholder="tacos,cheap dinner,drinks...."
                                        onChange={this.update}
                                        className="biz-find-search"
                                        />
                                    {/* </label> */}
                                </div>
                                <div className="biz-near-div">
                                    {/* <label className="biz-near">Near */}
                                        <input 
                                        type="text"
                                        placeholder="New York, NY"
                                        className="biz-near-search"
                                        />
                                    {/* </label> */}
                                </div>
                                <button type="submit" className="biz-but">
                                    <Link to="/businesses" className="biz-search-link">
                                        Search
                                    </Link>
                                </button>
                                
                            </form>
                        </div>
                    </div>
                </header>

                <div className="biz-div-box1">
                    <h1 className="biz-h1"> Best Businesses near New York </h1>
                    <div className="biz-div-box2">
                        <div className="biz-box">
                            <h2 className="biz-results"> All Results</h2>
                            {this.props.businesses.map(business => (
                               <BusinessIndexItem 
                                    business={business} 
                                    key={business.id} 
                                /> 
                            ))}
                        </div>
                        <div className="biz-map">
                            {/* <img src="https://www.legalgenealogist.com/wordpress/wp-content/uploads/2019/09/GMaps.jpg" className="biz-img-map"/>
                            <img src="https://www.legalgenealogist.com/wordpress/wp-content/uploads/2019/09/GMaps.jpg" className="biz-img-map" />
                            <img src="https://www.legalgenealogist.com/wordpress/wp-content/uploads/2019/09/GMaps.jpg" className="biz-img-map" /> */}
                            <BusinessMap />
                        </div>
                    </div>
                </div>
            </>

        )
    };
};

export default BusinessesIndex;