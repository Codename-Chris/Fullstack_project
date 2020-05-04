import React from 'react';
import { Link, withRouter } from 'react-router-dom';




const ReviewListItem = (props) => {
    // debugger

    // const profPic = () => {
    //     // debugger
    //     if (props.author.prof_pic === undefined) {
    //         return <img className="placeholder-prof-pic" src={window.krabbyPatty4Url} />
    //     } else { return <img className="placeholder-prof-pic" src={props.author.prof_pic} /> }
    // }

    // const gone = () => {
    //     debugger

    //     if (props.user_id != undefined && props.user_id === props.author.id) {
    //         if (props.review) {
    //             let review = props.review;
    //             return <button className="header-logout-button" onClick={() => this.props.deleteReview(review).bind(this)}>delete</button>
    //         }
    //     }
    // }




    

    return <div className="review-index-box2">
        {/* <p>REVIEW LIST ITEM</p> */}
        {/* <img src="https://media0.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif?cid=ecf05e478702021b1b264ee821fb10a59133399882f5f9b9&rid=giphy.gif" alt=""/> */}
        {/* <Footer /> */}
        <div className="review-list-item-leftest-side" >
            <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png" alt=""/>
            {/* {gone()} */}

        </div>
        <div className="review-list-item-left-side">
            <div className="review-name-list">{props.author.username}</div>
            <div className="review-location-list">New York, New York</div>
            
            <div className="amount-reviews-list">  <i className="fas fa-star" id="rev-stars" /> Reviews </div>
        </div>
        <div className="review-list-item-right-side">
            <div className="review-rating-list">{props.review.rating} <i className="fas fa-star" id="rev-stars2" /> <i className="fas fa-star" id="rev-stars2" /> <i className="fas fa-star" id="rev-stars2" /> <i className="fas fa-star" id="rev-stars2" /> <i className="fas fa-star" id="rev-stars2" /></div>
            <div className="review-body-list">{props.review.review}</div>
        </div>
    </div>
}

export default withRouter(ReviewListItem);