# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Exercise.create([
  { name: "Bench Press", category: "Chest"},
  { name: "Dead Lift", category: "Back" },
  { name: "Barbell Squats", category: "Legs" },
  { name: "Shoulder Press", category: "Shoulder" },
  { name: "Barbell Rows", category: "Back" },
])
