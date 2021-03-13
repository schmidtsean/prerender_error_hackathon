class ProductsController < ApplicationController
  before_action :set_department
  before_action :set_product, only: [ :show, :edit, :update, :destroy ]

  def index
    @products = @department.products
    render component: 'Products', props: { department: @department, products: @products }
  end

  def show
    render component: 'Product', props: { department: @department, product: @product }
  end

  def new
    @product = @department.products.new
    render component: 'ProductNew', props: { department: @department, product: @product }
  end

  def create
    @product = @department.products.new(product_params)
    if @product.save
      redirect_to department_products_path(@department)
    else
      render component: 'ProductNew', props: { department: @department, product: @product}
    end
  end

  def edit
    render component: 'ProductEdit', props: {department: @department, product: @product}
  end

  def update
    if @product.update(product_params)
      redirect_to department_products_path(@department)
    else
      render component: 'ProductEdit', props: { department: @department, product: @product}
    end
  end

  def destroy
    @product.destroy
    redirect_to department_products_path(@department)
  end

  private
    def product_params
      params.require(:product).permit(:name, :description, :price, :stock)
    end

    def set_department
      @department = Department.find(params[:department_id])
    end

    def set_product
      @product = @department.products.find(params[:id])
    end

end
