class PassagePolicy < ApplicationPolicy
  def index?
    true
  end

  def new?
    true
  end

  class Scope < Scope
    def resolve
      scope.where(user_id: user.id)
    end
  end
end
