class Review < ApplicationRecord
    validates :review, :rating, :author_id, :business_id, presence: true
    validates :rating, inclusion: { in: [1, 2, 3, 4, 5] }
  
    belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business
end
