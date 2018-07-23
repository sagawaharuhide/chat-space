json.content @message.content
json.image @message.image
json.user_id @message.user_id
json.user_name @message.user_name
json.created_at @message.created_at.in_time_zone('Tokyo').to_s
