class CreateMiseEnPlateaus < ActiveRecord::Migration[5.0]
  def change
    create_table :mise_en_plateaus do |t|
      t.float :montant
      t.integer :caissier_id
      t.integer :plateau_id
      t.integer :tirroirCaisse_id

      t.timestamps
    end
  end
end
