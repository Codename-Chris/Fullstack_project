class Business < ApplicationRecord
    validates :name, :category, :phone_number, :website, :address, presence: true

    has_many_attached :photos
    
    has_many :reviews,
    foreign_key: :business_id,
    class_name: :Review
end
