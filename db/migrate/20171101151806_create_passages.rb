class CreatePassages < ActiveRecord::Migration[5.1]
  def change
    create_table :passages do |t|
      t.string :departure_port
      t.string :arrival_port
      t.datetime :departure_date
      t.datetime :arrival_date
      t.text :description
      t.float :miles
      t.float :hours
      t.float :night_hours
      t.string :role
      t.boolean :overnight, null: false
      t.boolean :tidal, null: false
      t.boolean :ocean_passage, null: false
      t.timestamps
    end
  end
end
