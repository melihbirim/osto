class IssuesController < ApplicationController
  def index
    @issues = Issue.all
    @issues = @issues.where(status: params[:status]) if params[:status].present?
    @issues = @issues.where("title ILIKE ?", "%#{params[:search]}%") if params[:search].present?
  end

  def new
    @issue = Issue.new
  end

  def create
    @issue = Issue.new(issue_params)
    if @issue.save
      redirect_to project_path(@issue.project), notice: "Issue created successfully!"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @issue = Issue.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render :not_found, status: :not_found
  end

  def update
    @issue = Issue.find(params[:id])
    if @issue.update(issue_params)
      redirect_to project_path(@issue.project), notice: "Issue updated successfully!"
    else
      render :edit, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render :not_found, status: :not_found
  end

  def destroy
    @issue = Issue.find(params[:id])
    @issue.destroy
    project = @issue.project
    redirect_to project_path(project), notice: "Issue deleted successfully!"
  end

  private

  def issue_params
    params.require(:issue).permit(:title, :description, :status, :project_id)
  end
end
