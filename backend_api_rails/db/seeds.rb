# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Walker.create(radius: 10, rating: 4.2)
Walker.create(id: 0, radius: 0, rating: 0)
Walker.create(radius: 20, rating: 3.83)
Walker.create(radius: 25, rating: 4.7)
# Walker.create(radius: , rating: )

Owner.create(payment: 30)
Owner.create(payment: 40)
Owner.create(payment: 20)

User.create(name: "John Waggington", gender: "male", address: "231 P St NW, Washington DC 20001", phone: "000-000-0000", username: "j_wag67", password_digest: "pass", email: "jwag@woof.com", userable_type: "Walker", userable_id: 1)

User.create(name: "Sarah Barker", gender: "female", address: "57 Bates St St NW, Washington DC 20001", phone: "000-000-0000", username: "Barks_a_lot", password_digest: "pass", email: "email@woof.com", userable_type: "Walker", userable_id: 2)

User.create(name: "Candace Wiggle", gender: "female", address: "63 Hanover Place NW, Washington DC 20001", phone: "000-000-0000", username: "wiggle_waggle", password_digest: "pass", email: "email@wiggle.com", userable_type: "Walker", userable_id: 3)

User.create(name: "Gary Garyson", gender: "male", address: "700 8th St NW, Washington DC 20001", phone: "000-000-0000", username: "gary_the_snail", password_digest: "pass", email: "email@garyson.com", userable_type: "Owner", userable_id: 1)

User.create(name: "Bert Wooferson", gender: "male", address: "1558 15th Place NW, Washington DC 20001", phone: "000-000-0000", username: "sesame_13", password_digest: "pass", email: "woof@wooferson.com", userable_type: "Owner", userable_id: 2)

User.create(name: "Ernest Howler", gender: "male", address: "22 K St NE, Washington DC 20002", phone: "000-000-0000", username: "good_dog", password_digest: "pass", email: "ernie@howler.com", userable_type: "Owner", userable_id: 3)

# User.create(name: "", gender: "male", "", phone: "000-000-0000", username: "", password_digest: "pass", email: "", userable_type: "", userable_id: )

# dog behaviors: friendly, aggresive, shy, is leash trained, pulls on leash, doesn't like other people, doesn't like other dogs, jumper, chases small animals

Dog.create(name: "Pepper", gender: "female", breed: "Heeler", age: "6 months", avatar: "blank", weight: 32, allergies: "none", behaviors: "[friendly, jumper, chases small animals]", owner_id: 2)

Dog.create(name: "Austin", gender: "female", breed: "Black Lab", age: "12", avatar: "blank", weight: "65", allergies: "none", behaviors: "[friendly, doesn't like other dogs, is leash trained]", owner_id: 1)

Dog.create(name: "River", gender: "female", breed: "Border Collie", age: "8", avatar: "blank", weight: "45", allergies: "none", behaviors: "[doesn't like other dogs, pees from excitement, friendly]", owner_id: 2)

Dog.create(name: "Charles Barkley", gender: "male", breed: "Coon Hound", age: "5", avatar: "blank", weight: "60", allergies: "chicken", behaviors: "[pulls on leash, chases small animals, jumper]", owner_id: 3)

Dog.create(name: "Sir Alfred Waggington", gender: "male", breed: "Chihuahua", age: "12", avatar: "blank", weight: "8", allergies: "lamb", behaviors: "aggressive, pulls on leash, doesn't like other dogs, doesn't like other people]", owner_id: 3)

Appointment.create(date: "11/15/20", time: "5:30 PM", address: "1558 15th Place NW, Washington DC 20001", duration: "20 minutes", available: "false", walker_id: 1, dog_id: 1)

Appointment.create(date: "11/19/20", time: "1 PM", address: "700 8th St NW, Washington DC 20001", duration: "15 minutes", available: "false", walker_id: 1, dog_id: 2)

Appointment.create(date: "1/14/21", time: "12 PM", address: "1558 15th Place NW, Washington DC 20001", duration: "30 minutes", walker_id: 2, dog_id: 3)

Appointment.create(date: "12/21/20", time: "7 AM", address: "22 K St NE, Washington DC 20002", duration: "20 minutes", walker_id: 2, dog_id: 4)

Appointment.create(date: "1/12/21", time: "6 PM", address: "22 K St NE, Washington DC 20002", duration: "45 minutes", walker_id: 3, dog_id: 5)

Appointment.create(date: "12/28/20", time: "12:00", address: "1558 15th Place NW, Washington DC 20001", duration: "1 hour", walker_id: 3, dog_id: 1)

Appointment.create(date: "11/20/20", time: "4 PM", address: "700 8th St NW, Washington DC 20001", duration: "15 minutes", available: "false", walker_id: 1, dog_id: 2)

Appointment.create(date: "12/16/20", time: "5 PM", address: "1558 15th Place NW, Washington DC 20001", duration: "30 minutes", walker_id: 3, dog_id: 3)