class CreateCaissiers < ActiveRecord::Migration[5.0]
  def change
    create_table :caissiers do |t|
      t.string :identifiant
      t.string :mdp

      t.timestamps
    end
  end
end
