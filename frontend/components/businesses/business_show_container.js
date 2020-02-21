import { connect } from 'react-redux';
import { fetchBusiness } from '../../util/businesses_api_util'
import BusinessShow from './business_show'

const mapStateToProps = (state, ownProps) => {
    return {
        business: state.entities.businesses[ownProps.match.params.businessId],
        // currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusiness: (id) => dispatch(fetchBusiness(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BusinessShow);
