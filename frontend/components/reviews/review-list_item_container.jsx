import { fetchReviews,deleteReview } from '../../actions/reviews_actions';
import { fetchUsers } from '../../actions/user_actions';
import ReviewListItem from './review_list_item';
import { connect } from 'react-redux';

const msp = (state) => {
    return ({
        users: Object.values(state.entities.users),
        reviews: Object.values(state.entities.reviews),
        user_id: state.session.id
    })
}

const mdp = (dispatch) => {
    return ({
        deleteReview: (review) => dispatch(deleteReview(review)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchReviews: (businessId) => dispatch(fetchReviews(businessId))
    })
}


export default connect(msp, mdp)(ReviewListItem);