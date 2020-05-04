import React from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {
    constructor (props) {
        super(props)
        this.handleLogOut = this.handleLogOut.bind(this)    
        this.getLinks = this.getLinks.bind(this)
        // this.update = this.update.bind(this);
    }
    componentDidUpdate() {
        this.getLinks()
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }
    
    handleLogOut(e) {
        e.preventDefault();
        this.props.logout()
    }

    getLinks() {
        // debugger
        if (!this.props.user) {
            return (
            <header className="splash-header">
                <div className="splash-left-links">
                    <a href="#" className="splash-a">Write a Review</a>
                </div>
                <div className="splash-right-links">
                    <Link to="/login" className="splash-r-l">Log In</Link>
                    <Link to="/signup" className="splash-signup">Sign Up</Link>
                </div>
            </header>
            );
        } else {
            return ( 
                <header className="splash-header">
                    <div className="splash-left-links">
                        <a href="#" className="splash-a">Write a Review</a>
                        {/* <a href="https://github.com/Codename-Chris" className="splash-a">Github</a>
                        <a href="https://www.linkedin.com/in/christopher-garthright/" className="splash-a">LinkedIn</a> */}
                    </div>
                    <div className="splash-right-links">
                        <button className="splash-signout" onClick={this.props.logout}>Log Out</button>
                    </div>
                </header>
            )
        }
    }

    render() {
        return (
            <div className="all-splash">
                {/* <header className="splash-header">
                    <div className="splash-left-links">
                        <a href="#" className="splash-a">Write a Review</a>
                        <a href="https://github.com/Codename-Chris" className="splash-a">Github</a>
                        <a href="https://www.linkedin.com/in/christopher-garthright/" className="splash-a">LinkedIn</a>
                    </div>
                    <div className="splash-right-links">
                        <Link to="/login" className="splash-r-l">Log In</Link>
                        <Link to="/signup" className="splash-signup">Sign Up</Link>
                    </div>
                </header> */}
                {this.getLinks()}
                <a href="#" className="splash-a-h1"><h1>Celp <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/dcb526e86d86/assets/img/logos/burst_desktop_xsmall_outline@2x.png" className="header-logo" /></h1></a>
                <form className="splash-form">
                    <label className="splash-label">
                        <span className="splash-span">Find</span>
                        <input 
                        type="text" 
                        onChange={this.update} 
                        placeholder="burgers,barbers,plumbers..."
                        className="splash-input"
                        />
                    </label>
                    <label className="splash-label-2">
                        <span className="splash-span-2">Near</span>
                        <input
                            type="text"
                            onChange={this.update}
                            placeholder="New York, NY"
                            className="splash-input-2"
                        />
                    </label>
                    <button type="submit" className="splash-but"><Link to="/search"><i className="fas fa-search" id="search-img"></i></Link></button>
                </form>
                <div className="splash-sub-links">
                    <a href="https://github.com/Codename-Chris" className="splash-sub-a"><i className="fab fa-github"></i> Github</a>
                    <a href="https://www.linkedin.com/in/christopher-garthright/" className="splash-sub-a"><i className="fab fa-linkedin"></i> LinkedIn</a>
                    <a href="https://angel.co/christopher-garthright" className="splash-sub-a"><i className="fab fa-angellist"></i> AngelList</a>
                    {/* <a href='#/search' className="splash-sub-a">Delivery</a> */}
                </div>
                <div className="splash-img-cred">
                    <div className="cred-link">
                        <div className="cred-des">   
                            <a href="#/businesses" className="photo-des">
                                <p className="cred-text-1">Chris' Cronuts</p>
                            </a>
                        </div>
                        <div className="cred">
                            <p className="cred-text">Photo by</p>
                            <a href="https://github.com/Codename-Chris" className="photo-by">
                                <p className="cred-name">Codename_Chris</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default SplashPage;