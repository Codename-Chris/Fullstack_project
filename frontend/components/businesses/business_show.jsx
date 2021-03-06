import React from 'react';
import { Link } from 'react-router-dom';
import BusinessMap from '../map/business_map'
import ReviewListItem from '../reviews/review_list_item'

class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            find: "",
            near: "",
            user_id: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    //    debugger
        this.props.fetchUsers().then( () => this.props.fetchBusiness(parseInt(this.props.match.params.businessId)))
        
    }

    // componentWillUnmount() {
    //     debugger
    //     this.props.fetchUsers().then(() => this.props.fetchBusiness(parseInt(this.props.match.params.businessId)))
    // }
    // componentDidUpdate() {
    //     if (!this.props.business) {
    //         //    debugger
    //         this.props.fetchBusiness(parseInt(this.props.match.params.businessId))

    //         // if (this.props.currentUser) {
    //         //     this.props.fetchUser(this.props.currentUser.id);
    //     }

    // }

    // componentwillUpdate() {
    //     debugger
    //     this.props.fetchUsers().then(() => this.props.fetchBusiness(parseInt(this.props.match.params.businessId)))
    // }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    // getStars() {
    //     if ((this.props.reviews.rating )=== 5) {
    //         return (
    //             <p className="biz-rating">
    //                 <i className="fas fa-star" id="biz-stars" />
    //                 <i className="fas fa-star" id="biz-stars" />
    //                 <i className="fas fa-star" id="biz-stars" />
    //                 <i className="fas fa-star" id="biz-stars" />
    //                 <i className="fas fa-star" id="biz-stars" />
    //                 {this.props.reviews.length} Reviews
    //             </p>
    //         )
    //     } else if ((this.props.reviews.rating) === 4) { 
    //         return (
                // <p className="biz-rating">
                //     <i className="fas fa-star" id="biz-stars" />
                //     <i className="fas fa-star" id="biz-stars" />
                //     <i className="fas fa-star" id="biz-stars" />
                //     <i className="fas fa-star" id="biz-stars" />
                //     <i className="fas fa-star" id="biz-stars" />
                //     {this.props.reviews.length} Reviews
                // </p>
    //         )
    //     }
    // }

    render() {
        // debugger
        let searchy = `/businesses/search/${this.state.find}`;
        if (this.state.find === "") {
            searchy = `/businesses/`
        }

        const ratings = this.props.reviews.map(review => {
            return review.rating
        });

        let totalRatings;
        if (this.props.reviews.length === 0){
            totalRatings = null;
        } else {
            totalRatings = ratings.reduce((a,b) => {
                return a + b;

            });
            // console.log(totalRatings)
        }

        const ratingAvg = Math.round((totalRatings/this.props.reviews.length))

        const getStars = () => {
            if (ratingAvg === 5) {
                return (
                    <p className="biz-rating">
                        <i className="fas fa-star" id="biz-stars" />
                        <i className="fas fa-star" id="biz-stars" />
                        <i className="fas fa-star" id="biz-stars" />
                        <i className="fas fa-star" id="biz-stars" />
                        <i className="fas fa-star" id="biz-stars" />
                        {/* {this.props.reviews.length} Reviews */}
                    </p>
                )
            } else if (ratingAvg === 4) {
                return (
                <p className="biz-rating">
                    <i className="fas fa-star" id="biz-stars" />
                    <i className="fas fa-star" id="biz-stars" />
                    <i className="fas fa-star" id="biz-stars" />
                    <i className="fas fa-star" id="biz-stars" />
                    {/* {this.props.reviews.length} Reviews */}
                </p>
                )
            } else if (ratingAvg === 3) {
                return (
                    <p className="biz-rating">
                        <i className="fas fa-star" id="biz-stars" />
                        <i className="fas fa-star" id="biz-stars" />
                        <i className="fas fa-star" id="biz-stars" />
                        {/* {this.props.reviews.length} Reviews */}
                    </p>
                )
            } else if (ratingAvg === 2) {
                return (
                    <p className="biz-rating">
                        <i className="fas fa-star" id="biz-stars" />
                        <i className="fas fa-star" id="biz-stars" />
                        {/* {this.props.reviews.length} Reviews */}
                    </p>
                )
            } else if (ratingAvg === 1) {
                return (
                    <p className="biz-rating">
                        <i className="fas fa-star" id="biz-stars" />
                        {/* {this.props.reviews.length} Reviews */}
                    </p>
                )
            } else {
                return (
                    <p className="biz-rating">
                        <i className="fas fa-star" id="biz-stars" />
                        {/* {this.props.reviews.length} Reviews */}
                    </p>
                )
            }
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
                                        value={this.state.find}
                                        onChange={this.update("find")}
                                        className="biz-find-search"
                                    />
                                    {/* </label> */}
                                </div>
                                <div className="biz-near-div">
                                    {/* <label className="biz-near">Near */}
                                    <input
                                        type="text"
                                        placeholder="New York, NY"
                                        onChange={this.update("near")}
                                        className="biz-near-search"
                                    />
                                    {/* </label> */}
                                </div>
                                <Link className="splash-button-link" to={searchy}>
                                    <button type="submit" className="splash-but">
                                        <i className="fas fa-search" id="search-img"></i>
                                    </button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </header>

                <div className="biz-show-item">
                    {/* <Link className="biz-pic" to={`/businesses/${this.props.business}`}><img className="biz-img-pic" src={this.props.business.photoUrls[0]} /></Link> */}
                   <div className="biz-show-photos">    
                        <img src={this.props.business.photoUrls[0]} />
                        <img src={this.props.business.photoUrls[1]} />
                        <img src={this.props.business.photoUrls[2]} />
                        <img src={this.props.business.photoUrls[3]} />
                   </div>
                   <div className="biz-show-info-container">
                        <div className="biz-show-info-inner-container">
                            <div className="biz-show-info">
                                {/* <Link className="biz-name" to={`/businesses/${props.business.id}`}>{props.business.name}</Link> */}
                                <p className="biz-show-name"> {this.props.business.name} </p>
                                {getStars()}
                                {/* <p className="biz-rating">
                                    <i className="fas fa-star" id="biz-stars" />
                                    <i className="fas fa-star" id="biz-stars" />
                                    <i className="fas fa-star" id="biz-stars" />
                                    <i className="fas fa-star" id="biz-stars" />
                                    <i className="fas fa-star" id="biz-stars" />
                                    {this.props.reviews.length} Reviews
                                </p> */}
                                {/* <p> {this.props.business.description} </p> */}
                                <p className="biz-category">{this.props.business.price} <span className="biz-category-span"> • {this.props.business.category}</span></p>
                                <button type="submit" className="biz-show-but">
                                    <Link to={`/businesses/${this.props.business.id}/reviews`} className="biz-show-search-link">
                                        Write a Review
                                    </Link>
                                </button>
                            </div> 
                            <div className="biz-show-side-info">
                                <div className="biz-show-side-info-details">
                                    <p className="biz-website">{this.props.business.website}</p>
                                </div>
                                <div className="biz-show-side-info-details">
                                    <p className="biz-phone-num">{this.props.business.phone}</p>
                                </div>
                                <div>
                                    <p>Open Now!</p>
                                </div>
                            </div>  
                        </div>   
                        <div className="covid-19">
                            <p className="covid-19-p1">COVID-19 Advisory: <span className="covid-19-biz">Business operations may be affected</span></p>
                            <p>Due to ongoing precautionary measures, please contact the business directly for updated hours and availability.</p>
                        </div>
                       
                        <div className="biz-show-location-hours">
                            Location {`&`} Hours
                        </div>
                        <div className="biz-show-location-map">
                            <div className="biz-show-inner-map2">
                                {/* <img src="https://www.legalgenealogist.com/wordpress/wp-content/uploads/2019/09/GMaps.jpg" className="biz-show-img-map" /> */}
                                <div className="biz-show-map"><BusinessMap /></div>
                                <div className="biz-map-add-div">
                                    <p>{this.props.business.address}</p>
                                </div>
                                <div>
                                    <p className="biz-map-address">New York, NY</p>
                                </div>
                            </div>
                            <div className="business-show-container-mid-hours">
                                {/* <div><p id="week">Mon</p><p>{this.props.business.opening_hours}</p></div>
                                <div><p id="week">Tue</p><p>{this.props.business.opening_hours}</p></div>
                                <div><p id="week">Wed</p><p>{this.props.business.opening_hours}</p></div>
                                <div><p id="week">Thu</p><p>{this.props.business.opening_hours}</p></div>
                                <div><p id="week">Fri</p><p>{this.props.business.opening_hours}</p></div>
                                <div><p id="week">Sat</p><p>{this.props.business.opening_hours}</p></div>
                                <div><p id="week">Sun</p><p>{this.props.business.opening_hours}</p></div> */}

                                <div><p id="week">Mon</p><p>{this.props.business.open} - {this.props.business.close}</p></div>
                                <div><p id="week">Tue</p><p>{this.props.business.open} - {this.props.business.close}</p></div>
                                <div><p id="week">Wed</p><p>{this.props.business.open} - {this.props.business.close}</p></div>
                                <div><p id="week">Thu</p><p>{this.props.business.open} - {this.props.business.close}</p></div>
                                <div><p id="week">Fri</p><p>{this.props.business.open} - {this.props.business.close}</p></div>
                                <div><p id="week">Sat</p><p>{this.props.business.open} - {this.props.business.close}</p></div>
                                <div><p id="week">Sun</p><p>{this.props.business.open} - {this.props.business.close}</p></div>
                            </div>
                        </div>

                    <div className="biz-show-rec-rev">
                        <p className="rec-rev-p">Recommended Reviews</p>
                    </div>

                    <div className="biz-show-rev-outter">
                        <div className="biz-show-rev-inner"></div>
                        <div className="biz-show-rev-start">
                            <div id="biz-show-rev-stars">
                                <i className="fas fa-star" id="biz-stars-unrev"/>
                                <i className="fas fa-star" id="biz-stars-unrev" />
                                <i className="fas fa-star" id="biz-stars-unrev"/>
                                <i className="fas fa-star" id="biz-stars-unrev"/>
                                <i className="fas fa-star" id="biz-stars-unrev" />
                            </div>
                            <div>Start your review of <span className="biz-show-name-span"><Link to={`/businesses/${this.props.business.id}/reviews`} className="biz-show-search-link2">
                                {this.props.business.name}
                            </Link></span></div>
                            
                        </div>
                    {/* </div> */}
                    </div>  
                    <div className="img-outter">
                        <div className="biz-rev-show">
                                {this.props.reviews.map(review => {
                                    
                                    return <ReviewListItem 
                                    key={review.id}
                                    review={review}
                                    author={this.props.users[review.author_id]}
                                    user_id={this.props.user_id}
                                    deleteReview={this.props.deleteReview}
                                    />})}
                                
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default BusinessShow;