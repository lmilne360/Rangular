class Exercise < ApplicationRecord
  belongs_to :category
  validates_presence_of :name

  def category=(title)
    title = title.strip.singularize.downcase.capitalize
    category =  Category.where(title: title).first_or_create
    self.category_id = category.id
  end
end
