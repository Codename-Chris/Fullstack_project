class Api::BusinessesController < ApplicationController 
    def index 
        @businesses = Business.includes(:reviews)
        render :index
    end

    def show
        @business = selected_business
        
        if @business
            render :show
        else
            render json: @business.errors.full_messages, status: 422
        end
    end

    private 

    def selected_business
        Business.find(params[:id])
    end  
end