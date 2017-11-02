class Passage < ApplicationRecord
  belongs_to :user

  validates_presence_of(
    :departure_date,
    :departure_port,
    :arrival_date,
    :arrival_port,
    :hours,
    :night_hours,
    :miles,
    :user_id)
end
