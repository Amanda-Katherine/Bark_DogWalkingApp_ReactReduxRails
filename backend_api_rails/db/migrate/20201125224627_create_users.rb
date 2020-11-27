class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :gender
      t.string :address
      t.string :phone_number
      t.string :username
      t.string :password_digest
      t.string :email
      t.references :userable, polymorphic: true, null: false

      t.timestamps
    end
  end
end