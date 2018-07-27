joson.array! @messages do |message|
  json.name  message.user.name
  json.created_at  message.created_at.to_s
  josn.content  message.content
  joson.image  message.image.url
  json.user_id  message.user_id
