import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = (props) => {
    const ratings = props.reviews.filter(review => {
        return (review.business_id === props.business.id)
    }).map(rev => {
        return rev.rating
    })
   

    let totalRatings;
    if (props.reviews.filter(review => {
        return (review.business_id === props.business.id)
    }).length === 0) {
        totalRatings = null;
    } else {
        totalRatings = ratings.reduce((a, b) => {
            return a + b;

        });
        // console.log(totalRatings)
    }

    const ratingAvg = Math.round((totalRatings / props.reviews.filter(review => {
        return (review.business_id === props.business.id)
    }).length))

    const getStars = () => {
        if (ratingAvg === 5) {
            return (
                <p className="biz-rating">
                    <i className="fas fa-star" id="biz-stars" />
                    <i className="fas fa-star" id="biz-stars" />
                    <i className="fas fa-star" id="biz-stars" />
                    <i className="fas fa-star" id="biz-stars" />
                    <i className="fas fa-star" id="biz-stars" />
                    {/* {props.reviews.filter(review => {
                         return ( review.business_id === props.business.id)
                     }).length} Reviews  */}
                </p>
            )
        } else if (ratingAvg === 4) {
            return (
                <p className="biz-rating">
                    <i className="fas fa-star" id="biz-stars" />
                    <i className="fas fa-star" id="biz-stars" />
                    <i className="fas fa-star" id="biz-stars" />
                    <i className="fas fa-star" id="biz-stars" />
                    {/* {props.reviews.filter(review => {
                         return ( review.business_id === props.business.id)
                     }).length} Reviews  */}
                </p>
            )
        } else if (ratingAvg === 3) {
            return (
                <p className="biz-rating">
                    <i className="fas fa-star" id="biz-stars" />
                    <i className="fas fa-star" id="biz-stars" />
                    <i className="fas fa-star" id="biz-stars" />
                    {/* {props.reviews.filter(review => {
                         return ( review.business_id === props.business.id)
                     }).length} Reviews  */}
                </p>
            )
        } else if (ratingAvg === 2) {
            return (
                <p className="biz-rating">
                    <i className="fas fa-star" id="biz-stars" />
                    <i className="fas fa-star" id="biz-stars" />
                    {/* {props.reviews.filter(review => {
                         return ( review.business_id === props.business.id)
                     }).length} Reviews  */}
                </p>
            )
        } else if (ratingAvg === 1) {
            return (
                <p className="biz-rating">
                    <i className="fas fa-star" id="biz-stars" />
                    {/* {props.reviews.filter(review => {
                        return (review.business_id === props.business.id)
                    }).length} Reviews  */}
                </p>
            )
        } else {
            return (
                <p className="biz-rating">
                    <i className="fas fa-star" id="biz-stars" />
                    {/* {props.reviews.filter(review => {
                        return (review.business_id === props.business.id)
                    }).length} Reviews  */}
                </p>
            )
        }
    }
    
    return (
        <div>
            <Link  className="biz-index-item-link" to={`/businesses/${props.business.id}`}>
                <div className="biz-index-item">
                    <div className="biz-pic" to={`/businesses/${props.business.id}`}><img className="biz-img-pic" src={props.business.photoUrls[0]}/></div>
                    <div className="biz-index-item-inner">
                        
                        <div className="biz-name" to={`/businesses/${props.business.id}`}> {props.business.name}</div>
                        {getStars()}
                        {/* <p className="biz-rating">
                            <i className="fas fa-star" id="biz-stars" />
                            <i className="fas fa-star" id="biz-stars"/>
                            <i className="fas fa-star" id="biz-stars"/>
                            <i className="fas fa-star" id="biz-stars"/>
                            <i className="fas fa-star" id="biz-stars"/>
                            {props.reviews.filter(review => {
                                return ( review.business_id === props.business.id)
                            }).length} Reviews 
                        </p> */}
                        <p className="biz-category">{props.business.price} • {props.business.category}</p>
                        {/* <p> more info </p> */}
                    <p className="biz-description"> {props.business.description} </p>
                    </div>
                    <div className="biz-add-div">
                        <p>{props.business.phone}</p>
                        <p>{props.business.address}</p>
                        <p className="biz-address">New York, NY</p>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default BusinessIndexItem;