## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|:user, null: false, foreign_key: true|
|group_id|references|:group, null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|:user, null: false, foreign_key: true|
|group_id|references|:group, null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :groups
- has_many :members
- has_many :messages


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users
- has_many :members
- has_many :messages
