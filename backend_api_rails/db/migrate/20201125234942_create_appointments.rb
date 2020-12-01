class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.string :date
      t.string :time
      t.string :address
      t.integer :duration
      t.boolean :available, default: true
      t.references :dog, null: false, foreign_key: true
      t.references :walker, null: false, foreign_key: true, default: 0

      t.timestamps
    end
  end
end
