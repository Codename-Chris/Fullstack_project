class AddMoreInfoToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :price, :string
    add_column :businesses, :phone, :string
    add_column :businesses, :open, :string
    add_column :businesses, :close, :string
  end
end
