class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |c|
      c.string :comment
      c.string :author

      c.timestamp
    end
  end
end
