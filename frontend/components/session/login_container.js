import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { clearErrors } from '../../actions/errors_action'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Sign Up</Link>,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
