 json.array! @new_message do |message|
    json.created_at  message.created_at.to_s
    json.name message.user.name
    json.content  message.content
    json.image  message.image.url
    json.user_id  message.user_id
    json.id message.id
  end
