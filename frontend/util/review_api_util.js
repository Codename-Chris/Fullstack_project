export const fetchReviews = () => {
    return $.ajax({
        url: `/api/businesses/${review.business_id}/reviews`,
        method: "GET"
    });
}

export const fetchReview = id => {
    return $.ajax({
        method: "GET",
        url: `/api/reviews/${id}`
    });
}

export const createReview = review => {
    debugger
    return $.ajax({
        url: `/api/businesses/${review.business_id}/reviews`,
        method: "POST",
        data: { review }
    });
}

export const editReview = review => {
    return $.ajax({
        url: `/api/businesses/${review.business_id}/reviews/${id}`,
        method: "PATCH",
        data: { review }
    });
}

export const deleteReview = id => {
    // debugger
    return $.ajax({
        url: `/api/businesses/${review.business_id}/reviews/${id}`,
        method: "DELETE"
    });
}