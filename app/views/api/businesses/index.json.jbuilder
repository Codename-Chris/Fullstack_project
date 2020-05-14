json.businesses do 
  @businesses.each do |business|
    json.set! business.id do
      json.partial! 'business', business: business;
      json.photoUrls business.photos.map { |file| url_for(file) }
    end
  end
end

json.reviews do 
  @businesses.each do |business| 
    business.reviews.each do |review| 
      json.set! review.id do 
        json.partial! "api/reviews/review", review: review
      end
    end
  end
end
