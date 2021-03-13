class ReviewsController < ApplicationController
  before_action: set_product
  before_action: set_review
  def index
    @reviews = @products.reviews
    render component: 'Reviews', props: { product: @product, reviews: @reviews }
  end

  def show
    render component: 'Review', props: { product: @product, review: @review }
  end

  def new
    @review = @product.reviews.new(review_params)
    render component: 'ReviewNew', props: { product: @product, review: @review }
  end

  def create
    @review = @product.reviews.new(review_params)
    if @review.save
      redirect_to product_reviews_path(@product)
    else
      render component: 'ReviewNew', props { product: @product, review: @review}
    end
  end

  def edit
    render component: 'ReviewEdit', props: {product: @product, reviews: @reviews}
  end

  def update
    if @review.update(review_params)
      redirect_to product_reviews_path(@product)
    else
      render component: 'ReviewEdit', props: { product: @product, review: @review }
    end
  end

  def destroy
    @review.destroy
    redirect_to product_reviews_path(@product)
  end

  private
    def review_params
      params.require(:product).permit(:date, :rating, :subject, :body)
    end

    def set_product
      @product = Product.find(params[:product_id])
    end

    def set_song
      @review = @product.reviews.find(params[:id])
    end
end