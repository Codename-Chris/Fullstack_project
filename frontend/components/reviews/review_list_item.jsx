import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
import Footer from "../footer/footer"



const ReviewListItem = (props) => {
    // debugger

    // const profPic = () => {
    //     // debugger
    //     if (props.author.prof_pic === undefined) {
    //         return <img className="placeholder-prof-pic" src={window.krabbyPatty4Url} />
    //     } else { return <img className="placeholder-prof-pic" src={props.author.prof_pic} /> }
    // }

    // const gone = () => {
    //     // debugger

    //     if (props.user_id === props.author.id) {
    //         let reviewId = props.review.id;
    //         return <button className="header-logout-button" onClick={() => props.deleteReview(reviewId)}>delete</button>
    //     }
    // }
    // const revIds = () => {
    //   if (props.author.reviewIds.length === undefined) {
    //     return <div className="amount-reviews-list">  <FontAwesomeIcon icon={faStar} className="starcon-list" /><span>24</span> reviews </div> 
    //   } else { return <div className="amount-reviews-list">  <FontAwesomeIcon icon={faStar} className="starcon-list" /><span>{props.author.reviewIds.length}</span> reviews </div> }
    // }
    //  {revIds()}

    return <div className="review-index-box2">
        <p>REVIEW LIST ITEM</p>
        <img src="https://media0.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif?cid=ecf05e478702021b1b264ee821fb10a59133399882f5f9b9&rid=giphy.gif" alt=""/>
        {/* <Footer /> */}
        {/* <div className="review-list-item-leftest-side" >
            {profPic()}
            {gone()}

        </div>
        <div className="review-list-item-left-side">
            <div className="review-name-list">{props.author.first_name} {props.author.last_name[0]}.</div>
            <div className="review-location-list">Bikini Bottom</div>
            <div className="amount-reviews-list">  <FontAwesomeIcon icon={faStar} className="starcon-list" /><span>{props.author.reviewIds}</span> reviews </div>
        </div>
        <div className="review-list-item-right-side">
            <div className="review-rating-list">{props.review.rating}</div>
            <div className="review-body-list">{props.review.body}</div>
        </div> */}
    </div>
}

export default withRouter(ReviewListItem);