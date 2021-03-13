class DepartmentsController < ApplicationController
  skip_before_action :verify_authenticity_token 
  def index
    @departments = current_user.departments
    render component: "Departments", props: { user: current_user, departments: @departments }
  end

  def show
    @department = current_user.departments.find(params[:id])
    render component: "Department", props: { user: current_user, department: @department}
  end

  def new
    @department = current_user.departments.new
    render component: "DepartmentNew", props: { user: current_user, department: @department }
  end

def create
  @department = current_user.departments.new(department_params)
  if @department.save
    redirect_to root_path
  else
    render component: "DepartmentNew", props: { user: current_user, department: @department }
  end
end

def edit
  @department = current_user.departments.find(params[:id])
  render component: 'DepartmentEdit', props: { user: current_user, department: @department }
end

def update
  @department = current_user.departments.new(department_params)
  if @department.update(department_params)
    redirect_to root_path
  else
    render component: "DepartmentNew", props: { user: current_user, department: @department }
  end
end

def destroy
  @department = current_user.departments.find(params[:id])
  @department.destroy 
  redirect_to root_path
end

private 
  def department_params
    params.require(:department).permit(:title)
  end
end
