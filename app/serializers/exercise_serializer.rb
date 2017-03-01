class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :reps, :goal
  belongs_to :category, serializer: ExerciseCategorySerializer
end
