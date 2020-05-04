export const fetchReviews = (businessId) => {
    return $.ajax({
        url: `/api/businesses/${businessId}/reviews`,
        method: "GET"
    });
}

export const fetchReview = review => {
    return $.ajax({
        method: "GET",
        url: `/api/businesses/${review.businessId}/'reviews/${review.id}`
    });
}

export const createReview = review => {
    // debugger
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

export const deleteReview = review => {
    // debugger
    return $.ajax({
        url: `/api/businesses/${review.business_id}/reviews/${review.id}`,
        method: "DELETE"
    });
}