class AddTitleToReservation < ActiveRecord::Migration[5.0]
  def change
    add_column :reservations, :title, :string
  end
end
