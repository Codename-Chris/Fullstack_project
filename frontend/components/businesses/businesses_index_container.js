import { connect } from 'react-redux';
import BusinessesIndex from "./businesses_index";
import { fetchBusinesses } from "../../actions/businesses_action"


const mapStateToProps = (state) => {
    return {
        businesses: Object.values(state.entities.businesses)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessesIndex);