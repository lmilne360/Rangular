class ExercisesController < ApplicationController

  def index
    @exercises = Exercise.all
    render json: @exercises
  end

  def show

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
end
