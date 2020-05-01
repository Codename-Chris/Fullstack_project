import { connect } from "react-redux";
import { createReview } from "../../actions/reviews_actions"
import ReviewForm from "./review_form";
import { fetchBusiness } from '../../actions/businesses_action'
// import { Link } from 'react-router-dom';



const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        user: state.entities.users[state.session.id],
        business: state.entities.businesses[ownProps.match.params.businessId] ||
        {
            name: "",
            category: "",
            description: "",
            lng: 0,
            lat: 0,
            address: "",
            website: "",
            phone_number: 0,
            // opening_hours: "",
            // closing_hours: "",
            photoUrls: []
        }
    }
}

const mdp = dispatch => {
    return {
        processReview: (review) => dispatch(createReview(review)),
        fetchBusiness: (id) => dispatch(fetchBusiness(id)),
        // clearErrors: () => dispatch(clearErrors([])),
    };
};


export default connect(msp, mdp)(ReviewForm)