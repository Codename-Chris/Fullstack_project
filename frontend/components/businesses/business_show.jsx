import React from 'react';
import { Link } from 'react-router-dom';
import BusinessMap from '../map/business_map'

class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    //    debugger
       if (!this.props.business) {
        //    debugger
        this.props.fetchBusiness(parseInt(this.props.match.params.businessId))
        this.render();
        // if (this.props.currentUser) {
        //     this.props.fetchUser(this.props.currentUser.id);
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        // debugger
        if (!this.props.business) {
            return <></> 
        }
        return (
            // <div>
            //     <header>
            //         <Link to="/" className="header-link"><h1>Celp <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/dcb526e86d86/assets/img/logos/burst_desktop_xsmall_outline@2x.png" className="header-logo" /></h1></Link>
            //     </header>
            //     <h3>This will be the Business Show Page!</h3>
            //     <img src="https://media3.giphy.com/media/y6Sl42U3xEFkk/giphy.gif?cid=790b7611406eb2e2edf52c6135db6a6fe2c792a12cef8717&rid=giphy.gif" alt=""/>
            // </div>
            <div>
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
                                        placeholder="tacos, cheap dinner, drinks...."
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

                <div className="biz-show-item">
                    {/* <Link className="biz-pic" to={`/businesses/${this.props.business}`}><img className="biz-img-pic" src={this.props.business.photoUrls[0]} /></Link> */}
                   <div className="biz-show-photos">    
                        <img src={this.props.business.photoUrls[0]}/>
                        <img src="https://midlandbrewing.com/wp-content/uploads/2018/04/Photo-Coming-Soon.png" />
                        <img src="https://midlandbrewing.com/wp-content/uploads/2018/04/Photo-Coming-Soon.png" />
                        <img src="https://midlandbrewing.com/wp-content/uploads/2018/04/Photo-Coming-Soon.png" />
                   </div>
                   <div className="biz-show-info-container">
                        <div className="biz-show-info-inner-container">
                            <div className="biz-show-info">
                                {/* <Link className="biz-name" to={`/businesses/${props.business.id}`}>{props.business.name}</Link> */}
                                <p className="biz-show-name"> {this.props.business.name} </p>
                                <p className="biz-rating">* * * * * </p>
                                {/* <p> {this.props.business.description} </p> */}
                                <p className="biz-category">$$$ • {this.props.business.category}</p>
                                <button type="submit" className="biz-show-but">
                                    <Link to={`/businesses/${this.props.business.id}/reviews`} className="biz-show-search-link">
                                        Write a Review
                                    </Link>
                                </button>
                            </div> 
                        </div>   
                        <div className="covid-19">
                            <p>COVID-19 Advisory: <span className="covid-19-biz">Business operations may be affected</span></p>
                            <p>Due to ongoing precautionary measures, please contact the business directly for updated hours and availability.</p>
                        </div>
                        <div className="biz-show-side-info"> 
                            <p className="biz-website">{this.props.business.website}</p>
                            <p className="biz-phone-num">({this.props.business.phone_number}) 767-2880</p>
                            <p>More Info Coming Soon!</p>
                        </div>  
                        <div className="biz-show-location-hours">
                            Location {`&`} Hours
                        </div>
                        <div className="biz-show-location-map">
                            <div className="biz-show-inner-map">
                                {/* <img src="https://www.legalgenealogist.com/wordpress/wp-content/uploads/2019/09/GMaps.jpg" className="biz-show-img-map" /> */}
                                <BusinessMap />
                            </div>
                            <div className="biz-add-div">
                                <p>{this.props.business.address}</p>
                                <p className="biz-address">New York, NY</p>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default BusinessShow;