class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
    @issues = @project.issues
    @issues = @issues.where(status: params[:status]) if params[:status].present?
    @issues = @issues.where("LOWER(title) LIKE LOWER(?)", "%#{params[:search]}%") if params[:search].present?
  rescue ActiveRecord::RecordNotFound
    render :not_found, status: :not_found
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      redirect_to projects_path, notice: "Project created successfully!"
    else
      render :new
    end
  end

  def edit
    @project = Project.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render :not_found, status: :not_found
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      redirect_to project_path(@project), notice: "Project updated successfully!"
    else
      render :edit
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to projects_path, notice: "Project deleted successfully!"
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :status)
  end
end
