import React from 'react';
import { Link } from 'react-router-dom';
// import { signup, login } from '../../util/session_api_util';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email:'',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    };

    update(field) {
        return (e) => this.setState({ [field]: e.target.value});
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    };

    handleDemo(e) {
        e.preventDefault();
        this.props.processForm({ 
            email: "guestdemo@gmail.com", 
            username: "guestdemo1", 
            password: "password123"
        });
    };

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const {formType,navLink} = this.props;

        if (formType === 'signup') {
            return (
                <div>
                    <header>
                        <Link to="/" className="header-link"><h1>Celp <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/dcb526e86d86/assets/img/logos/burst_desktop_xsmall_outline@2x.png" className="header-logo" /></h1></Link>
                    </header>
                        <div className="all-login-form">
                            <div className="login-form-container">
                                <form onSubmit={this.handleSubmit} className="login-form-box">
                                    <h2 className="session-header">Sign Up for Celp!</h2>
                                    <p className="session-subhead">Connect with great local businesses</p>
                                     <p className="session-tos"> By continuing, you agree to Celp’s
                                        <a href="#"> Terms of Service </a> 
                                        acknowledge Celp’s
                                        <a href="#"> Privacy Policy </a>
                                        .
                                    </p>
                                    {this.renderErrors()}
                                    <p className="login-redirect">Please {formType} or {navLink}!</p> 
                                    <fieldset className='fieldset-leg'>
                                        <legend align='center' className='leg-or'>OR</legend>
                                    </fieldset>
                                    <div className="login-form">
                                        <label>
                                        <input type="text"
                                                value={this.state.email}
                                                onChange={this.update('email')}
                                                className="login-input"
                                                placeholder='Email'
                                            />
                                        </label>
                                        <br/>
                                        <label>
                                        <input type="text"
                                                value={this.state.username}
                                                onChange={this.update('username')}
                                                className="login-input"
                                                placeholder='Username'
                                            />
                                        </label>
                                        <br/>
                                        <label>
                                        <input type="password"
                                                value={this.state.password}
                                                onChange={this.update('password')}
                                                className="login-input"
                                                placeholder='Password'
                                            />
                                        </label>
                                        <br/>
                                        <a href="#" className="login-forgot">Forgot Password?</a>
                                        <br/>
                                        <input className="session-submit" type="submit" value="Sign Up" />
                                        <p className="login-redirect-bot">Already on Celp? {navLink}</p>
                                        <br/>
                                    </div>
                                </form>
                            </div>
                        </div>
                                <div className="login-pic-outer-div">
                                    <div className="login-pic-div">
                                        <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" className="login-pic" />
                                    </div>
                                </div>
                    </div>
                ); 


        } else if (formType === 'login') {
            return (
                <div>
                    <header>
                        <Link to="/" className="header-link"><h1>Celp <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/dcb526e86d86/assets/img/logos/burst_desktop_xsmall_outline@2x.png" className="header-logo"/></h1></Link>
                    </header>
                        <div className="all-login-form">
                            <div className="login-form-container">
                                <form onSubmit={this.handleSubmit} className="login-form-box">
                                    <h2 className="session-header">Welcome Back to Celp</h2>
                                    <p className="login-redirect">New to Celp? {navLink}!</p>
                                    <p className="session-tos"> By logging in, you agree to Celp’s
                                            <a href="#"> Terms of Service </a>
                                        and
                                            <a href="#"> Privacy Policy </a>
                                        .
                                    </p>
                                    {this.renderErrors()}
                                    <div className="demo-input">
                                        <input
                                        type="submit"
                                        onClick={this.handleDemo}
                                        value="Demo User"
                                        className="demo-button"
                                        />
                                    </div>
                                    <br/>
                                    <fieldset className='fieldset-leg'>
                                        <legend align='center' className='leg-or'>OR</legend>
                                    </fieldset>
                                    <div className="login-form">
                                        <br/>
                                        <label>
                                        <input type="text"
                                                value={this.state.email}
                                                onChange={this.update('email')}
                                                className="login-input"
                                                placeholder='Email'
                                            />
                                        </label>
                                        <br/>
                                        <label>
                                        <input type="password"
                                                value={this.state.password}
                                                onChange={this.update('password')}
                                                className="login-input"
                                                placeholder='Password'
                                            />
                                        </label>
                                        <br/>
                                        <a href="#" className="login-forgot">Forgot Password?</a>
                                        <br/>
                                        <input className="session-submit" type="submit" value="Log In"/>
                                        <p className="login-redirect-bot">New to Celp? {navLink}</p>
                                        <br/>
                                    </div>
                                </form>
                                <div className="login-pic-outer-div">
                                    <div className="login-pic-div">
                                        <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" className="login-pic" />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            );

        }
        
    }
}

export default SessionForm;