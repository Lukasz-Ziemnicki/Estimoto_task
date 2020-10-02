class ResponseSerializer
  include ActiveModel::Serializers::JSON

  ATTRIBUTES = %i[status body]

  alias attributes instance_values

  def initialize(response)
    @response = response

    ATTRIBUTES.each do |attribute|
      instance_variable_set("@#{attribute}", send(attribute))
    end
  end

  def as_json(options={})
    super({ only: [:body, :status] }.deep_merge(options))
  end

  private

  def status
    @status ||= @response.status
  end

  def body
    JSON.parse(@response.body) if [200, 201].include?(status)
  end
end
