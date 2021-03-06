class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.string :address, null: false
      t.integer :phone_number, null: false
      t.string :website, null: false

      t.timestamps
    end
  end
end
