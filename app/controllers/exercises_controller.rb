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

  end

  def edit

  end

  def update

  end

  def destroy

  end

  def set_exercise
    @exercise = Exercise.find(params[:id])
  end
end
