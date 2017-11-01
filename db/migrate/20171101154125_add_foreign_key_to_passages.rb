class AddForeignKeyToPassages < ActiveRecord::Migration[5.1]
  def change
    add_reference :passages, :user, foreign_key: true
  end
end
