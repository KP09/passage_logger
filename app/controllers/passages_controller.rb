class PassagesController < ApplicationController
  def index
    @passages = policy_scope(Passage)
  end
end
