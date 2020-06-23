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
board2 = Board.create({title: "Second board"})

list = List.create title: "First List", board: board1
card = Card.create title: "First Card", list: list, description: "Hello Card", labels: ['blue', 'green'], due_date: 2.days.from_now
