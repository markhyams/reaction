# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all
List.destroy_all
Card.destroy_all

board1 = Board.create({title: "First board"})


list = List.create title: "First List", board: board1
list2 = List.create title: "Second List", board: board1

Card.create title: "First Card", list: list, description: "Hello Card", labels: ['red', 'blue', 'green'], due_date: 1.days.from_now
Card.create title: "Second Card", list: list, description: "Another Card", labels: ['green'], due_date: 2.days.from_now
Card.create title: "Third Card", list: list2, description: "My Card", labels: ['blue', 'green', 'purple'], due_date: 2.days.from_now
Card.create title: "Fourth Card", list: list2, description: "Your Card", labels: ['blue', 'green'], due_date: 3.days.from_now
Card.create title: "Fifth Card", list: list2, description: "Everybody's Card", labels: ['blue', 'green', 'black'], due_date: 4.days.from_now
