class TeamsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_team, only: [:show, :edit, :update, :destroy]

  def index
    @teams = current_user.teams
  end

  def show
    @projects = @team.projects.active
  end

  def new
    @team = Team.new
  end

  def create
    @team = Team.new(team_params)
    if @team.save
      TeamMember.create(team: @team, user: current_user, role: :owner)
      redirect_to @team, notice: 'Team created successfully!'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @team.update(team_params)
      redirect_to @team, notice: 'Team updated successfully!'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @team.destroy
    redirect_to teams_path, notice: 'Team deleted successfully!'
  end

  private

  def set_team
    @team = current_user.teams.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render :not_found, status: :not_found
  end

  def team_params
    params.require(:team).permit(:name, :description)
  end
end