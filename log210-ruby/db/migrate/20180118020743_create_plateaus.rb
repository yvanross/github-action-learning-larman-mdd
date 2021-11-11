class CreatePlateaus < ActiveRecord::Migration[5.0]
  def change
    create_table :plateaus do |t|
      t.string :identifiant

      t.timestamps
    end
  end
end
