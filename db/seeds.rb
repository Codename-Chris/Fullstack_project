# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 

User.create (email: 'guestdemo@aol.com', username: "guestdemo1",password: "password123")

User.create (email: 'guestdemo1@aol.com', username: "guestdemo01",password: "password111")

User.create (email: 'guestdemo2@aol.com', username: "guestdemo02",password: "password222")

User.create (email: 'guestdemo3@aol.com', username: "guestdemo03",password: "password333")

User.create (email: 'guestdemo4@aol.com', username: "guestdemo04",password: "password444")
