import { connect } from "react-redux";
import SplashPage from "./splash_page";
import { logout } from "../actions/session_actions";
import { fetchUsers } from '../actions/users_action';
import { fetchBusinesses } from '../actions/businesses_action';

const mapStateToProps = (state) => {
    return {
        user: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchBusinesses: () => dispatch(fetchBusinesses())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SplashPage);