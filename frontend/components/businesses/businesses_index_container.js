import { connect } from 'react-redux';
import BusinessesIndex from "./businesses_index";
import { fetchBusinesses } from "../../actions/businesses_action"
import { fetchUsers } from '../../actions/users_action';


const mapStateToProps = (state, ownProps) => {
    return {
        businesses: Object.values(state.entities.businesses),
        find: ownProps.match.params.query || "",
        reviews: Object.values(state.entities.reviews),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses()),
        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessesIndex);