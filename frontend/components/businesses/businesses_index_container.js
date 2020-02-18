import { connect } from 'react-redux';
import BusinessesIndex from "./businesses_index";


const mapStateToProps = (state) => {
    return {
        businesses: Object.values(state.entities.businesses)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessesIndex);