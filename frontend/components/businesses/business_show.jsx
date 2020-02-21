import React from 'react';
import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.props.fetchBusiness(this.props.match.params.businessId)
    //     if (this.props.currentUser) {
    //         this.props.fetchUser(this.props.currentUser.id);
    //     }
    // }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <header>
                    <Link to="/" className="header-link"><h1>Celp <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/dcb526e86d86/assets/img/logos/burst_desktop_xsmall_outline@2x.png" className="header-logo" /></h1></Link>
                </header>
                <h3>This will be the Business Show Page!</h3>
                <img src="https://media3.giphy.com/media/y6Sl42U3xEFkk/giphy.gif?cid=790b7611406eb2e2edf52c6135db6a6fe2c792a12cef8717&rid=giphy.gif" alt=""/>
            </div>
            // <div>
            //     <div className="biz-show-item">
            //         <Link className="biz-pic" to={`/businesses/${this.props.business}`}><img className="biz-img-pic" src={this.props.business.photoUrls[0]} /></Link>
            //         <div className="biz-show-item-inner">
            //             {/* <Link className="biz-name" to={`/businesses/${props.business.id}`}>{props.business.name}</Link> */}
            //             <p className="biz-rating">*****</p>
            //             <p className="biz-category">$$$ ~ {this.props.business.name}</p>
            //             <p className="biz-website">{this.props.business.website}</p>
            //         </div>
            //         <div className="biz-add-div">
            //             <p>{this.props.business.address}</p>
            //             <p className="biz-address">New York,NY</p>
            //         </div>
            //     </div>
            // </div>
        )
    };
};

export default BusinessShow;