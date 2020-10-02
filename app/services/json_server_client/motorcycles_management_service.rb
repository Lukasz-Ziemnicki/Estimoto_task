module JsonServerClient
  class MotorcyclesManagementService
    include Singleton

    JSON_SERVER_HOST = 'http://localhost:3000'.freeze
    RESOURCE_ENDPOINT = '/motorcycles'.freeze

    def create(params)
      create_request(http_method: :post, params: params)
    end

    def index
      shared_request(http_method: :get)
    end

    def update(params, id:)
      raise ArgumentError if id.nil?

      update_request(http_method: :put, id: id, params: params)

    rescue ArgumentError
      { "status" => 400 }
    end

    def destroy(id)
      raise ArgumentError if id.nil?

      shared_request(http_method: :delete, id: id)

    rescue ArgumentError
      { "status" => 400 }
    end

    private

    def client
      @client ||= Faraday.new(JSON_SERVER_HOST) do |client|
        client.request :url_encoded
        client.adapter Faraday.default_adapter
      end
    end

    def shared_request(http_method:, id: nil)
      ResponseSerializer.new(client.public_send(http_method, "#{RESOURCE_ENDPOINT}/#{id}"))

    rescue StandardError
      { "status" => 500 }
    end

    def create_request(http_method:, params: {})
      ResponseSerializer.new(client.public_send(http_method, RESOURCE_ENDPOINT, params))

    rescue StandardError
      { "status" => 500 }
    end

    def update_request(http_method:, id:, params: {})
      ResponseSerializer.new(client.public_send(http_method, "#{RESOURCE_ENDPOINT}/#{id}", params))

    rescue StandardError
      { "status" => 500 }
    end
  end
end
