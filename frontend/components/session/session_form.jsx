import React from 'react';
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
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
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
                <div className="login-form-container">
                    <br/>
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        Sign Up for Celp!
                    <br/>
                    <br/>
                        Please {formType} or {navLink}!
                    {this.renderErrors()}
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
                            <a href="#">Forgot Password?</a>
                            <br/>
                            <input className="session-submit" type="submit" value={formType} />
                            <br/>
                            <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" className="login-gif"/>
                        </div>
                    </form>
                </div>
            );
        } else if (formType === 'login') {
            return (
                <div className="login-form-container">
                    <br/>
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        Welcome Back to Celp
                    <br/>
                    <br/>
                        New to Celp? {navLink}!
                    {this.renderErrors()}
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
                            <a href="#">Forgot Password?</a>
                            <br/>
                            <input className="session-submit" type="submit" value={formType} />
                            <br/>
                            <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" className="login-gif" />
                        </div>
                    </form>
                </div>
            );

        }
        
    }
}

export default SessionForm;