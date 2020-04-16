export const fetchBusinesses = () => {
    return $.ajax({
        url: `/api/businesses `,
        method: "GET"
    })
};

export const fetchBusiness = (id) => {
    return $.ajax({
        url: `/api/businesses/${id}`,
        method: "GET"
    })
};
