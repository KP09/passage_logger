class PassagesController < ApplicationController
  def index
    @passages = policy_scope(Passage)
    authorize(@passages)
  end

  def new
    @passage = Passage.new
    authorize(@passage)
  end

  def create
    @passage = Passage.new(passage_params)
    @passage.user_id = current_user.id
    if @passage.save
      redirect_to passages_path
    else
      render 'new'
    end
  end

  private

  def passage_params
    params.require(:passage).permit(
      :departure_date,
      :departure_port,
      :arrival_date,
      :arrival_port,
      :role,
      :description,
      :hours,
      :night_hours,
      :miles,
      :overnight,
      :tidal,
      :ocean_passage
    )
  end
end
