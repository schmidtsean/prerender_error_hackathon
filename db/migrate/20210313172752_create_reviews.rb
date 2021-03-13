class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :subject
      t.text :body
      t.integer :rating
      t.string :date
      t.belongs_to :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
