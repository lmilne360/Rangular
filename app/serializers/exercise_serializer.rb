class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :reps
  belongs_to :category, serializer: ExerciseCategorySerializer
end
