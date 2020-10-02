module Api
  module V1
    class MotorcyclesController < ::ApplicationController
      def create
        render json: JsonServerClient::MotorcyclesManagementService.instance.create(permitted_params)
      end

      def index
        render json: JsonServerClient::MotorcyclesManagementService.instance.index
      end

      def update
        render json: JsonServerClient::MotorcyclesManagementService.instance.update(permitted_params, id: params[:id])
      end

      def destroy
        render json: JsonServerClient::MotorcyclesManagementService.instance.destroy(params[:id])
      end

      private

      def permitted_params
        params.require(:motorcycle).permit(:brand, :production_year, :after_car_accident)
      end
    end
  end
end
