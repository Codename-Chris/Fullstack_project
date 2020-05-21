require "open-uri"
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


biz1 = Business.create(
    name: "Chris' Cronuts", 
    category: "Bakery", 
    address: "123 Cherry Lane", 
    phone_number: "718-321-1212", 
    website: "Cronutsrus.com",
    lng: "40.765764",
    lat: "73.977025",
    description: "Chris' Cronuts has blessed the world with the mythical Cronut, a croissant-doughnut hybrid. What a glorious time to be alive!",
    price: "$$$",
    open: "6:00am",
    close: "6:00pm",
    phone: "(718) 313-1991"
    )

biz2 = Business.create(
    name: "Retro's Diner", 
    category: "Restaurant", 
    address: "827 Main Street", 
    phone_number: "718-406-0723", 
    website: "Nyretros.com",
    lng: "43.165762",
    lat: "71.077023",
    description: "Open 24/7 365 days a year, you can always count on Retro's!",
    price: "$$",
    open: "12:00am",
    close: "12:00pm",
    phone: "(917) 108-5515"
    )

biz3 = Business.create(
    name: "Grand Ave Pizza", 
    category: "Pizza", 
    address: "7829 Astoria Blvd", 
    phone_number: "718-897-2390", 
    website: "Grandavepizza.com",
    lng: "44.165761",
    lat: "70.177021",
    description: "When you look up pizza in the dictionary, there should be a picture of this place next to it.",
    price: "$",
    open: "10:30am",
    close: "1:00am",
    phone: "(718) 728-8879"
    )

biz4 = Business.create(
    name: "Brightside Cafe", 
    category: "Cafe", 
    address: "808 Sunny Drive", 
    phone_number: "718-515-8971", 
    website: "Brightsidecafe.com",
    lng: "41.265764",
    lat: "72.577029",
    description: "Good coffee, free wi-fi, and free scones on Sunday, this place is a vibe.",
    price: "$$$",
    open: "6:00am",
    close: "6:00pm",
    phone: "(917) 732-1248"
    )

biz5 = Business.create(
    name: "Grateful Bar", 
    category: "Bar", 
    address: "444 Northern Blvd", 
    phone_number: "718-220-6683", 
    website: "Gratefulbar.com",
    lng: "43.765764",
    lat: "74.977025",
    description: "Old school bar with new school flair, certainly worth a visit if you're in town.",
    price: "$",
    open: "12:00pm",
    close: "3:00am",
    phone: "(718) 215-8972"
    )

biz6 = Business.create(
    name: "Jigg's Kitchen", 
    category: "Resturant", 
    address: "20 West 34 Street ", 
    phone_number: "718-220-6683", 
    website: "JiggyTheTopChef.com",
    lng: "41.765764",
    lat: "75.977025",
    description: "Top chef Jigg brings all of these down home classics to new heights with his arsenal of secret sauces!",
    price: "$$$",
    open: "6:00am",
    close: "6:00pm",
    phone: "(718) 692-1272"
    )

biz7 = Business.create(
    name: "Kev's Quesadilla", 
    category: "Resturant", 
    address: "444 7th Ave", 
    phone_number: "718-220-6683", 
    website: "KevsQuesadilla.com",
    lng: "43.765764",
    lat: "74.977025",
    description: "Attempt the 'Queso King Challenge' and face off against a 5 pound queso drechenched quesadilla for $100 cash!",
    price: "$",
    open: "11:00am",
    close: "11:00pm",
    phone: "(718) 416-8972"
    )

biz8 = Business.create(
    name: "Sol FN Bar", 
    category: "Bar", 
    address: "55 East 9th Ave", 
    phone_number: "718-220-6683", 
    website: "SolFNBar.com",
    lng: "43.565762",
    lat: "74.577021",
    description: "Weekly fire preformances and pizza parties for all VIP members!",
    price: "$$",
    open: "12:00pm",
    close: "5:00am",
    phone: "(917) 215-8972"
    )

biz9 = Business.create(
    name: "J's Bakery", 
    category: "Bakery", 
    address: "92 Avenues of America", 
    phone_number: "718-220-6683", 
    website: "JsBakeryNYC.com",
    lng: "43.3657643",
    lat: "74.377023",
    description: "Featured on 'Best Thing I Ever Ate' for our famous banana bread pudding. We have some other pretty sweet stuff too, come check out for yourself!", 
    price: "$$$",
    open: "6:00am",
    close: "3:00pm",
    phone: "(718) 831-8073"
    )

biz10 = Business.create(
    name: "Quality Bagels", 
    category: "Bagels", 
    address: "3 West 8th Ave", 
    phone_number: "718-220-6683", 
    website: "NYQaulityBagels.com",
    lng: "42.265764",
    lat: "72.277025",
    description: "Home of the honey boiled bagels, that has taken the world by storm!",
    price: "$",
    open: "4:00am",
    close: "2:00pm",
    phone: "(917) 933-7077"
    )

biz11 = Business.create(
    name: "Peppy Pizza", 
    category: "Pizza", 
    address: "4 West 5th Ave", 
    phone_number: "718-220-6683", 
    website: "Peppypizza.com",
    lng: "42.265764",
    lat: "72.277025",
    description: "It ain't easy being this cheesy!",
    price: "$$",
    open: "10:00am",
    close: "10:00pm",
    phone: "(718) 392-6162"
    )

biz12 = Business.create(
    name: "Karma Cafe", 
    category: "Cafe", 
    address: "77 West 4th Ave", 
    phone_number: "718-220-6683", 
    website: "Karmacafe.com",
    lng: "42.265764",
    lat: "72.277025",
    description: "Home to a wide variety of coffee blends to satisfy all caffine lovers desires!",
    price: "$",
    open: "6:00am",
    close: "10:00pm",
    phone: "(917) 761-2222"
    )

biz13 = Business.create(
    name: "Thai-ger", 
    category: "Thai", 
    address: "66 West 8th Ave", 
    phone_number: "718-220-6683", 
    website: "Thaiger.com",
    lng: "42.265764",
    lat: "72.277025",
    description: "Traditional Thai with a funky take that will guarenteed take you on a flavor roller coaster!",
    price: "$$",
    open: "10:00am",
    close: "10:00pm",
    phone: "(718) 933-7077"
    )

biz14 = Business.create(
    name: "Exo Pizza", 
    category: "Pizza", 
    address: "11 West 5th Ave", 
    phone_number: "718-220-6683", 
    website: "ExoPizzaNY.com",
    lng: "42.265764",
    lat: "72.277025",
    description: "The closest thing to old world authentic Italian pizza as you can get in all of New York!",
    price: "$$$",
    open: "4:00am",
    close: "2:00pm",
    phone: "(917) 598-7582"
    )

biz15 = Business.create(
    name: "Ramenhaus", 
    category: "Ramen", 
    address: "93 West 6th Ave", 
    phone_number: "718-220-6683", 
    website: "Ramenhaus.com",
    lng: "42.265764",
    lat: "72.277025",
    description: "Just a small ramen shop with big time flavor!",
    price: "$",
    open: "11:00am",
    close: "11:00pm",
    phone: "(718) 153-1174"
    )


cronut1 = File.open(Rails.root.join('app', 'assets', 'images', 'cronut1.jpg'))
biz1.photos.attach(io: cronut1, filename: 'cronut1.jpg')

cronut2 = File.open(Rails.root.join('app', 'assets', 'images', 'cronut2.jpg'))
biz1.photos.attach(io: cronut2, filename: 'cronut2.jpg')

cronut3 = File.open(Rails.root.join('app', 'assets', 'images', 'cronut3.jpg'))
biz1.photos.attach(io: cronut3, filename: 'cronut3.jpg')

cronut4 = File.open(Rails.root.join('app', 'assets', 'images', 'cronut4.png'))
biz1.photos.attach(io: cronut4, filename: 'cronut4.png')



diner1 = File.open(Rails.root.join('app', 'assets', 'images', 'diner1.jpg'))
biz2.photos.attach(io: diner1, filename: 'diner1.jpg')

diner2 = File.open(Rails.root.join('app', 'assets', 'images', 'diner2.jpg'))
biz2.photos.attach(io: diner2, filename: 'diner2.jpg')

diner3 = File.open(Rails.root.join('app', 'assets', 'images', 'diner3.jpg'))
biz2.photos.attach(io: diner3, filename: 'diner3.jpg')

diner4 = File.open(Rails.root.join('app', 'assets', 'images', 'diner4.jpg'))
biz2.photos.attach(io: diner4, filename: 'diner4.jpg')



pizza1 = File.open(Rails.root.join('app', 'assets', 'images', 'pizza1.jpg'))
biz3.photos.attach(io: pizza1, filename: 'pizza1.jpg')

pizza2 = File.open(Rails.root.join('app', 'assets', 'images', 'pizza2.jpg'))
biz3.photos.attach(io: pizza2, filename: 'pizza2.jpg')

pizza3 = File.open(Rails.root.join('app', 'assets', 'images', 'pizza3.jpg'))
biz3.photos.attach(io: pizza3, filename: 'pizza3.jpg')

pizza4 = File.open(Rails.root.join('app', 'assets', 'images', 'pizza4.jpg'))
biz3.photos.attach(io: pizza4, filename: 'pizza4.jpg')



cafe1 = File.open(Rails.root.join('app', 'assets', 'images', 'cafe1.jpg'))
biz4.photos.attach(io: cafe1, filename: 'cafe1.jpg')

cafe2 = File.open(Rails.root.join('app', 'assets', 'images', 'cafe2.jpg'))
biz4.photos.attach(io: cafe2, filename: 'cafe2.jpg')

cafe3 = File.open(Rails.root.join('app', 'assets', 'images', 'cafe3.jpg'))
biz4.photos.attach(io: cafe3, filename: 'cafe3.jpg')

cafe4 = File.open(Rails.root.join('app', 'assets', 'images', 'cafe4.jpg'))
biz4.photos.attach(io: cafe4, filename: 'cafe4.jpg')



bar1 = File.open(Rails.root.join('app', 'assets', 'images', 'bar1.jpg'))
biz5.photos.attach(io: bar1, filename: 'bar1.jpg') 

bar2 = File.open(Rails.root.join('app', 'assets', 'images', 'bar2.jpg'))
biz5.photos.attach(io: bar2, filename: 'bar2.jpg') 

bar3 = File.open(Rails.root.join('app', 'assets', 'images', 'bar3.jpg'))
biz5.photos.attach(io: bar3, filename: 'bar1.jpg') 

bar4 = File.open(Rails.root.join('app', 'assets', 'images', 'bar4.jpg'))
biz5.photos.attach(io: bar4, filename: 'bar4.jpg') 



jigg1 = File.open(Rails.root.join('app', 'assets', 'images', 'jigg1.jpg'))
biz6.photos.attach(io: jigg1, filename: 'jigg1.jpg') 

jigg2 = File.open(Rails.root.join('app', 'assets', 'images', 'jigg2.png'))
biz6.photos.attach(io: jigg2, filename: 'jigg2.png') 

jigg3 = File.open(Rails.root.join('app', 'assets', 'images', 'jigg3.jpg'))
biz6.photos.attach(io: jigg3, filename: 'jigg3.jpg') 

jigg4 = File.open(Rails.root.join('app', 'assets', 'images', 'jigg4.jpg'))
biz6.photos.attach(io: jigg4, filename: 'jigg4.jpg') 



kev1 = File.open(Rails.root.join('app', 'assets', 'images', 'kev1.jpg'))
biz7.photos.attach(io: kev1, filename: 'kev1.jpg') 

kev2 = File.open(Rails.root.join('app', 'assets', 'images', 'kev2.jpg'))
biz7.photos.attach(io: kev2, filename: 'kev2.jpg') 

kev3 = File.open(Rails.root.join('app', 'assets', 'images', 'kev3.jpg'))
biz7.photos.attach(io: kev3, filename: 'kev3.jpg') 

kev4 = File.open(Rails.root.join('app', 'assets', 'images', 'kev4.jpg'))
biz7.photos.attach(io: kev4, filename: 'kev4.jpg') 



sol1 = File.open(Rails.root.join('app', 'assets', 'images', 'sol1.jpg'))
biz8.photos.attach(io: sol1, filename: 'sol1.jpg') 

sol2 = File.open(Rails.root.join('app', 'assets', 'images', 'sol2.jpg'))
biz8.photos.attach(io: sol2, filename: 'sol2.jpg') 

sol3 = File.open(Rails.root.join('app', 'assets', 'images', 'sol3.jpg'))
biz8.photos.attach(io: sol3, filename: 'sol3.jpg') 

sol4 = File.open(Rails.root.join('app', 'assets', 'images', 'sol4.jpg'))
biz8.photos.attach(io: sol4, filename: 'sol4.jpg') 



bakery1 = File.open(Rails.root.join('app', 'assets', 'images', 'bakery1.jpg'))
biz9.photos.attach(io: bakery1, filename: 'bakery1.jpg') 

bakery2 = File.open(Rails.root.join('app', 'assets', 'images', 'bakery2.jpg'))
biz9.photos.attach(io: bakery2, filename: 'bakery2.jpg') 

bakery3 = File.open(Rails.root.join('app', 'assets', 'images', 'bakery3.jpg'))
biz9.photos.attach(io: bakery3, filename: 'bakery3.jpg') 

bakery4 = File.open(Rails.root.join('app', 'assets', 'images', 'bakery4.jpg'))
biz9.photos.attach(io: bakery4, filename: 'bakery4.jpg') 



bagel1 = File.open(Rails.root.join('app', 'assets', 'images', 'bagel1.jpg'))
biz10.photos.attach(io: bagel1, filename: 'bagel1.jpg') 

bagel2 = File.open(Rails.root.join('app', 'assets', 'images', 'bagel2.jpg'))
biz10.photos.attach(io: bagel2, filename: 'bagel2.jpg') 

bagel3 = File.open(Rails.root.join('app', 'assets', 'images', 'bagel3.jpg'))
biz10.photos.attach(io: bagel3, filename: 'bagel3.jpg') 

bagel4 = File.open(Rails.root.join('app', 'assets', 'images', 'bagel4.jpg'))
biz10.photos.attach(io: bagel4, filename: 'bagel4.jpg') 



peppy1 = File.open(Rails.root.join('app', 'assets', 'images', 'peppy1.png'))
biz11.photos.attach(io: peppy1, filename: 'peppy1.png')

peppy2 = File.open(Rails.root.join('app', 'assets', 'images', 'peppy2.jpg'))
biz11.photos.attach(io: peppy2, filename: 'peppy2.jpg')

peppy3 = File.open(Rails.root.join('app', 'assets', 'images', 'peppy3.jpg'))
biz11.photos.attach(io: peppy3, filename: 'peppy3.jpg')

peppy4 = File.open(Rails.root.join('app', 'assets', 'images', 'peppy4.jpg'))
biz11.photos.attach(io: peppy4, filename: 'peppy4.jpg')



karma1 = File.open(Rails.root.join('app', 'assets', 'images', 'karma1.jpg'))
biz12.photos.attach(io: karma1, filename: 'karma1.jpg')

karma2 = File.open(Rails.root.join('app', 'assets', 'images', 'karma2.jpg'))
biz12.photos.attach(io: karma2, filename: 'karma2.jpg')

karma3 = File.open(Rails.root.join('app', 'assets', 'images', 'karma3.jpg'))
biz12.photos.attach(io: karma3, filename: 'karma3.jpg')

karma4 = File.open(Rails.root.join('app', 'assets', 'images', 'karma4.jpg'))
biz12.photos.attach(io: karma4, filename: 'karma4.jpg')



thai1 = File.open(Rails.root.join('app', 'assets', 'images', 'thai1.jpg'))
biz13.photos.attach(io: thai1, filename: 'thai1.jpg')

thai2 = File.open(Rails.root.join('app', 'assets', 'images', 'thai2.jpg'))
biz13.photos.attach(io: thai2, filename: 'thai2.jpg')

thai3 = File.open(Rails.root.join('app', 'assets', 'images', 'thai3.jpg'))
biz13.photos.attach(io: thai3, filename: 'thai3.jpg')

thai4 = File.open(Rails.root.join('app', 'assets', 'images', 'thai4.jpg'))
biz13.photos.attach(io: thai4, filename: 'thai4.jpg')



exo1 = File.open(Rails.root.join('app', 'assets', 'images', 'exo1.jpg'))
biz14.photos.attach(io: exo1, filename: 'exo1.jpg')

exo2 = File.open(Rails.root.join('app', 'assets', 'images', 'exo2.jpg'))
biz14.photos.attach(io: exo2, filename: 'exo2.jpg')

exo3 = File.open(Rails.root.join('app', 'assets', 'images', 'exo3.jpg'))
biz14.photos.attach(io: exo3, filename: 'exo3.jpg')

exo4 = File.open(Rails.root.join('app', 'assets', 'images', 'exo4.jpg'))
biz14.photos.attach(io: exo4, filename: 'exo4.jpg')



ramen1 = File.open(Rails.root.join('app', 'assets', 'images', 'ramen1.jpg'))
biz15.photos.attach(io: ramen1, filename: 'ramen1.jpg')

ramen2 = File.open(Rails.root.join('app', 'assets', 'images', 'ramen2.jpg'))
biz15.photos.attach(io: ramen2, filename: 'ramen2.jpg')

ramen3 = File.open(Rails.root.join('app', 'assets', 'images', 'ramen3.jpg'))
biz15.photos.attach(io: ramen3, filename: 'ramen3.jpg')

ramen4 = File.open(Rails.root.join('app', 'assets', 'images', 'ramen4.jpg'))
biz15.photos.attach(io: ramen4, filename: 'ramen4.jpg')