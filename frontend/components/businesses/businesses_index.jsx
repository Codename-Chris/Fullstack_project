import React from 'react';
import { Link } from 'react-router-dom';
import BusinessIndexItem from './businesses_index_item'
import BusinessMap from '../map/business_map';



class BusinessesIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            find: this.props.find,
            near: "",
            businesses: this.props.businesses
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return (e) => this.setState({ [field]: e.target.value,
            businesses: this.props.businesses.filter((biz) => biz.name.toLowerCase().includes(e.target.value.toLowerCase()))
         });
    };

    handleSubmit(e) {
        e.preventDefault();
    };
    
    componentDidMount() {
        // debugger
        this.props.fetchBusinesses()
        .then(() => this.setState({ 
            businesses: this.props.businesses.filter((biz) => biz.name.toLowerCase().includes(this.state.find.toLowerCase()))
        }))
        this.props.fetchUsers()
    }

    render() {
        // debugger
        let searchy = `/businesses/search/${this.state.find}`;
        if (this.state.find === "") {
            searchy = `/businesses/search/${this.state.find}`
        }

        let resulty = `${this.state.businesses.length} results for ${this.state.find}, try these resturants! `
       

        let businessList = Object.values(this.state.businesses).length === 0 ? this.props.businesses : this.state.businesses;
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
                                        value={this.state.near}
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

                <div className="biz-div-box1">
                    <h1 className="biz-h1"> {resulty}</h1>
                    <div className="biz-div-box2">
                        <div className="biz-box">
                            <h2 className="biz-results"> All Results</h2>
                            {businessList.map((business) => (
                                <BusinessIndexItem
                                    business={business}
                                    reviews={this.props.reviews}
                                    key={business.id}
                                /> 
                            ))}
                        </div>
                        <div className="biz-map">
                            <BusinessMap />
                        </div>
                    </div>
                </div>
            </>

        )
    };
};

export default BusinessesIndex;