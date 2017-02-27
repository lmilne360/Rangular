class ExercisesController < ApplicationController
before_action :set_exercise, only: [:show, :update, :destroy]
  def index
    @exercises = Exercise.all
    render json: @exercises
  end

  def show
    render json: @exercise
  end

  def new
  end

  def create
    @exercise = Exercise.new(exercise_params)
    if @exercise.save
      binding.pry
      render json: @exercise
    else
      render json: {error: @exercise.errors.full_messages.to_sentence}
    end
  end

  def edit

  end

  def update
    @exercise.update(exercise_params)
    render json: @exercise
  end

  def destroy
    @exercise.destroy
  end

  def set_exercise
    @exercise = Exercise.find(params[:id])
  end
  def exercise_params
    params.require(:exerciseData).permit(:name, :weight, :reps, :category)
  end
end
