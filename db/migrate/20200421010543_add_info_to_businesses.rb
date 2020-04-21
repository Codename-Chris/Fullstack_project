class AddInfoToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :lat, :integer
    add_column :businesses, :lng, :integer
    add_column :businesses, :description, :string
  end
end
