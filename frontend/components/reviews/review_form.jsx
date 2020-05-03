import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: '',
            rating: 0,
            business_id: "",
            author_id: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.id)
    }


    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        const review = {
            review: this.state.review,
            rating: this.state.rating,
            author_id: this.props.user.id,
            business_id: parseInt(this.props.match.params.id)
        }
        this.props.processReview(review).then(this.props.history.push(`/businesses/${this.props.match.params.id}`))
    }



    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="rev-errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
            <>
                <header className="rev-header">
                    <div className="rev-head">
                        <Link to="/" className="rev-header-link">
                            <h1>Celp <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/dcb526e86d86/assets/img/logos/burst_desktop_xsmall_outline@2x.png" className="biz-header-logo" /></h1>
                        </Link>
                    </div>
                </header>
                    {this.renderErrors()}
                <div className="review-outter-container">
               
                    <form className="form1" onSubmit={this.handleSubmit}>
                        <Link className="rev-biz-name" to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
                            <div className="rev-inner-box">
                            <div className="rev-form-rating-box">
                            <input type="number" value={this.state.rating} className="rating-thingy" min="1" max="5" onChange={this.update("rating")} />
                                    <div className='rating-texty'> Select your rating     </div>
                            </div>
                            <textarea className="review-text-body" id="" cols="30" rows="10" value={this.state.review} placeholder="Your review helps others learn about great local businesses! Please don't review this business if you recieved a freebie for writing this review, or if you're connected in any way to the owner or employees." onChange={this.update("review")}></textarea>
                            {/* <div>
                                <div>
                                <i className="fas fa-star" id="biz-stars-unrev" />
                                <i className="fas fa-star" id="biz-stars-unrev" />
                                <i className="fas fa-star" id="biz-stars-unrev" />
                                <i className="fas fa-star" id="biz-stars-unrev" />
                                <i className="fas fa-star" id="biz-stars-unrev" />
                                </div>
                            </div> */}
                        </div>
                            <input type="submit" className="review-submit" value="Post Review"/>
                    </form>
                </div>
                {/* <img src="https://media0.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif?cid=ecf05e478702021b1b264ee821fb10a59133399882f5f9b9&rid=giphy.gif" alt="" /> */}
                {/* <Footer /> */}
            </>
            </div>
        );
    }
};
export default withRouter(ReviewForm);