class MiseEnPlateauController < ApplicationController

  def caissiers
    Caissier.all
  end
end
