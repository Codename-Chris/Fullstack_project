import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/businesses_action'
import { fetchUsers } from '../../actions/users_action'
import { fetchReviews,deleteReview }from '../../actions/reviews_actions'
import BusinessShow from './business_show'

const mapStateToProps = (state, ownProps) => {
    return {
        business: state.entities.businesses[ownProps.match.params.businessId] || 
        {
            name: "",
            category: "",
            address: "",
            phone_number: "",
            website: "",
            lng: "",
            lat: "",
            description: "",
            price: "",
            open: "",
            close: "",
            phone: "",
            photoUrls: [],
        },
        reviews: Object.values(state.entities.reviews),
        users: state.entities.users,
        user_id: state.session.id
        // currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBusiness: id => dispatch(fetchBusiness(id)),
        fetchUsers: () => dispatch(fetchUsers()),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BusinessShow);
