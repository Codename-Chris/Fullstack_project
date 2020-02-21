import { connect } from "react-redux";
import SplashPage from "./splash_page";
import { logout } from "../actions/session_actions";

const mapStateToProps = (state) => {
    return {
        user: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SplashPage);