class AddCategoryToExercise < ActiveRecord::Migration[5.0]
  def change
    add_reference :exercises, :category, foreign_key: true
  end
end
