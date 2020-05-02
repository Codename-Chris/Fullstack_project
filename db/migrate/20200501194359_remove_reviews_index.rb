class RemoveReviewsIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, name: "index_reviews_on_business_id_and_author_id"
  end
end
