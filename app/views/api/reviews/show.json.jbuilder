json.partial! "api/reviews/review", review: @review

json.author do 
    json.partial! 'api/users/user', user: @review.user
end