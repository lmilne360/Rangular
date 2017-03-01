class AddGoalToExercise < ActiveRecord::Migration[5.0]
  def change
    add_column :exercises, :goal, :integer
  end
end
