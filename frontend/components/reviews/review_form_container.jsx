import { connect } from "react-redux";
import { createReview } from "../../actions/reviews_actions"
import ReviewForm from "./review_form";
import { fetchBusiness } from '../../actions/businesses_action'



const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        user: state.entities.users[state.session.id],
        business: state.entities.businesses[ownProps.match.params.id] 

    }
}

const mdp = dispatch => {
    return {
        processReview: (review) => dispatch(createReview(review)),
        fetchBusiness: (id) => dispatch(fetchBusiness(id))
    };
};


export default connect(msp, mdp)(ReviewForm)