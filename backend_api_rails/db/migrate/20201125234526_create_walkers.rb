class CreateWalkers < ActiveRecord::Migration[6.0]
  def change
    create_table :walkers do |t|
      t.integer :radius
      t.float :rating, precision: 1, scale: 1

      t.timestamps
    end
  end
end