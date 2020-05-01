import React from 'react';
import Footer from '../footer/footer';
import { Link, withRouter, Redirect } from 'react-router-dom';



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
        const review = {
            review: this.state.review,
            rating: this.state.rating,
            author_id: this.props.author.id,
            business_id: this.props.business.id,

        }
        this.props.processReview(review).then(this.props.history.push(`/businesses/${this.props.business.id}`))
    }



    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="biggly-error-hours" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        // if (!this.props.user) {
        //   <Redirect to="/login" />;
        // }
        return (
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
                {/* <div>
                    {this.renderErrors}
                </div> */}
               
    
                <form className="form1" onSubmit={this.handleSubmit}>
                    <Link className="rev-biz-name" to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
                        <div className="fake-box">
                        <div className="rev-form-rating-box">
                        <input type="number" value={this.state.rating} className="rating-thingy" min="1" max="5" onChange={this.update("rating")} />
                        <div className='rating-texty'> Select your rating </div>
                        </div>
                        <textarea className="review-text-body" id="" cols="30" rows="10" value={this.state.review} placeholder="Your review helps others learn about great local businesses! Please don't review this business if you recieved a freebie for writing this review, or if you're connected in any way to the owner or employees." onChange={this.update("review")}></textarea>
                        <input type="submit" className="review-submit" value="Post Review"/>
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
                </form>
                {/* <img src="https://media0.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif?cid=ecf05e478702021b1b264ee821fb10a59133399882f5f9b9&rid=giphy.gif" alt="" /> */}
                {/* <Footer /> */}
            
            </div>
        );
    }
};
export default withRouter(ReviewForm);