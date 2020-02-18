class Api::BusinessesController < ApplicationController 
    def index 
        @businesses = Business.all
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
        Businesss.find(params[:id])
    end 

    def business_params 
        params.require(:business).permit(:name, :address, :website, :phone_number)
    end   
end