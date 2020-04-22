import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = (props) => {
    // debugger
    return (
        <div className="biz-index-item">
            <Link className="biz-pic" to={`/businesses/${props.business.id}`}><img className="biz-img-pic" src={props.business.photoUrls[0]}/></Link>
            <div className="biz-index-item-inner">
                <Link className="biz-name" to={`/businesses/${props.business.id}`}>{props.business.name}</Link>
                <p className="biz-rating">*****</p>
                <p className="biz-category">$$$ ~ {props.business.category}</p>
                <p> phone number </p>
                <p> more info </p>
            </div>
            <div className="biz-add-div">
                <p>{props.business.address}</p>
                <p className="biz-address">New York,NY</p>
            </div>
        </div>
    )
};

export default BusinessIndexItem;