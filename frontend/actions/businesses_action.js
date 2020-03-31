import * as BizAPIUtil from '../util/businesses_api_util'

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const CLEAR_BUSINESSES = 'CLEAR_BUSINESSES'

export const receiveBusinesses = (businesses) => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses
    }
};

export const receiveBusiness = (business) => {
    return {
        type: RECEIVE_BUSINESS,
        business
    } 
};

export const clearBusinesses = () => {
    return {
        type: CLEAR_BUSINESSES
    }
};

export const fetchBusinesses = () => dispatch => {
    return BizAPIUtil.fetchBusinesses()
    .then((businesses) => dispatch(receiveBusinesses(businesses)))
};

export const fetchBusiness = (id) => dispatch => {
    return BizAPIUtil.fetchBusiness(id)
    .then((business) => dispatch(receiveBusiness(business)))
};