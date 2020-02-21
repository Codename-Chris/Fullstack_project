# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Business.destroy_all

user1 = User.create(email: 'guestdemo@gmail.com', username: 'guestdemo1', password: "password123")

user2 = User.create(email: 'guestdemo1@aol.com', username: "guestdemo01", password: "password111")

user3 = User.create(email: 'guestdemo2@aol.com', username: "guestdemo02", password: "password222")

user4 = User.create(email: 'guestdemo3@aol.com', username: "guestdemo03", password: "password333")

user5 = User.create(email: 'christophergarthright@gmail.com', username: "Chris", password: "chris313")


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

bar1 = File.open(Rails.root.join('app', 'assets', 'images', 'bar1.jpeg'))
biz5.photos.attach(io: bar1, filename: 'bar1.jpeg')