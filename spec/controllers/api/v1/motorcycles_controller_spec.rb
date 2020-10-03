require 'rails_helper'

RSpec.describe Api::V1::MotorcyclesController do
  context 'index' do
    it 'should return correct response' do
      client = JsonServerClient::MotorcyclesManagementService.instance
      json_server_response = { "status" => "200", "body" => [ { "brand" => "bmw", "production_year" => "2020" }, { "brand" => "honda", "production_year" => "2021" } ] }
      allow(client).to receive(:index).and_return(json_server_response)

      get :index

      expect(JSON.parse(response.body)).to eq json_server_response
    end
  end

  context 'create' do
    it 'should return correct response' do
      client = JsonServerClient::MotorcyclesManagementService.instance
      json_server_response = { "status" => "201", "body" => { "brand" => "honda", "production_year" => "2021" } }
      allow(client).to receive(:create).and_return(json_server_response)

      post :create, params: { motorcycle: { brand: "BMW", production_year: "2021" } }

      expect(JSON.parse(response.body)).to eq json_server_response
    end
  end

  context 'update' do
    it 'should return correct response' do
      client = JsonServerClient::MotorcyclesManagementService.instance
      json_server_response = { "status" => "201", "body" => { "brand" => "bmw", "production_year" => "2020" } }
      allow(client).to receive(:update).and_return(json_server_response)

      put :update, params: { id: 1, motorcycle: { brand: "BMW", production_year: "2021" } }

      expect(JSON.parse(response.body)).to eq json_server_response
    end
  end

  context 'destroy' do
    it 'should return correct response' do
      client = JsonServerClient::MotorcyclesManagementService.instance
      json_server_response = { "status" => "201" }
      allow(client).to receive(:destroy).and_return(json_server_response)

      delete :destroy, params: { id: 1 }

      expect(JSON.parse(response.body)).to eq json_server_response
    end
  end
end
