class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :reps, :category_title
end
