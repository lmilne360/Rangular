class ExercisesController < ApplicationController
before_action :set_exercise, only: [:show, :update, :destroy]
  def index
    @exercises = Exercise.all
    render json: @exercises
  end

  def show
    if @exercise
      render json: @exercise
    else
      render json: {error: "Exercise not found", status: 404 }, status: 404
    end
  end

  def new
  end

  def create
    @exercise = Exercise.new(exercise_params)
    if @exercise.save
      render json: @exercise
    else
      render json: {error: @exercise.errors.full_messages.to_sentence}
    end
  end

  def edit

  end

  def update
    if @exercise.update(exercise_params)
      render json: @exercise
    else
      render json: {error: @exercise.errors.full_messages.to_sentence}
    end
  end

  def destroy
    @exercise.destroy
  end

  def set_exercise
    @exercise = Exercise.find(params[:id])
  end
  def exercise_params
    params.require(:exerciseData).permit(:name, :weight, :reps, :category, :goal)
  end
end
