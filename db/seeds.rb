# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
sample_price = (0..100).to_a
sample_stock = (0..50).to_a
sample_rating = (0.5).to_a
3.times do
  department = Department.create(
    title: Faker::Restaurant.type,
    name_id: name.id
  )
  5.times do
    product = Product.create(
      name: Faker::Food.dish,
      description: Faker::Food.description,
      price: sample_price.sample,
      stock: sample_stock.sample,
      department_id: department.id
    )
  20.times do
    review = Review.create(
      date: Faker::Date.between(from: '1523-09-23', to: '1876-09-25'),
      rating: sample_rating.sample
      subject: Faker::Games::Pokemon.move,
      body: Faker::Restaurant.review,
      review_id: review.id
    )
    end
  end
end

puts "Data Seeded"