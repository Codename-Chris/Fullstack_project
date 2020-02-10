class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :business_id, null: false
      t.integer :author_id, null: false
      t.string :review, null: false
      t.integer :rating, null: false

      t.timestamps
    end

    add_index :reviews, [:business_id,:author_id], unique: true
  end
end
