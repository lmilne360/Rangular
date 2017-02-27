class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :reps, :category_title
  #belongs_to :category, serializer: ExerciseCategorySerializer
end
