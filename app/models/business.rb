class Business < ApplicationRecord
    validates :name, :category, :phone_number, :website, :address, presence: true

    has_many_attached :photos
end
