# Celp

Celp is a local business directory that is inspired by Yelp. Users can browse businesses in their local area, look up information about a specific business and submit a review optionally with pictures.

## Technologies Used
* Ruby on Rails
* PostgreSQL
* JavaScript (ES6)
* React.js and Redux
* AWS
* HTML and CSS

## Features 
* Frontend to backend user authentication using BCrypt
* Allows users to search for local businesses
* Uses AWS S3 to retain user and business photos
```Ruby
biz1 = Business.create(name: "Chris' Cronuts", category: "Bakery", address: "123 Cherry Lane", phone_number: "718-321-1212", website: "Cronutsrus.com")

biz2 = Business.create(name: "Retro's Diner", category: "Restaurant", address: "827 Main Street", phone_number: "718-406-0723", website: "Nyretros.com")

biz3 = Business.create(name: "Grand Ave Pizza", category: "Restaurant", address: "7829 Astoria Blvd", phone_number: "718-897-2390", website: "grandavepizza.com")

biz4 = Business.create(name: "Brightside Cafe", category: "Cafe", address: "808 Sunny Drive", phone_number: "718-515-8971", website: "brightsidecafe.com")

biz5 = Business.create(name: "Grateful Bar", category: "Bar", address: "444 Northern Blvd", phone_number: "718-220-6683", website: "gratefulbar.com")


cronut1 = File.open(Rails.root.join('app', 'assets', 'images', 'cronut1.jpg'))
biz1.photos.attach(io: cronut1, filename: 'cronut1.jpg')

diner1 = File.open(Rails.root.join('app', 'assets', 'images', 'diner1.jpg'))
biz2.photos.attach(io: diner1, filename: 'diner1.jpg')

pizza1 = File.open(Rails.root.join('app', 'assets', 'images', 'pizza1.jpg'))
biz3.photos.attach(io: pizza1, filename: 'pizza1.jpg')

cafe1 = File.open(Rails.root.join('app', 'assets', 'images', 'cafe1.jpg'))
biz4.photos.attach(io: cafe1, filename: 'cafe1.jpg')

bar1 = File.open(Rails.root.join('app', 'assets', 'images', 'bar1.jpg'))
biz5.photos.attach(io: bar1, filename: 'bar1.jpg')
```
## Future Features 
* Business Index
* Filtered Searches
* GeoLocation
* Creating/Editing Reviews
