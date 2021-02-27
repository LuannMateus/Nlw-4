defmodule Rocketpay.Users.CreateTest do

  use Rocketpay.DataCase, async: true

  alias Rocketpay.User
  alias Rocketpay.Users.Create

  describe "call/1" do

    test "When all params are valid, returns an user" do
      params = %{
        name: "Luan",
        password: "123456",
        nickname: "LuanM",
        email: "luan@nlw.com",
        age: 19
      }


      {:ok, %User{id: user_id}} = Create.call(params)
      user = Repo.get(User, user_id)

      assert %User{name: "Luan", age: 19, id: ^user_id} = user
    end

    test "When  all params are valid, returns an user" do
      params = %{
        name: "Luan",
        password: "123456",
        nickname: "LuanM",
        email: "luan@nlw.com",
        age: 19
      }


      {:ok, %User{id: user_id}} = Create.call(params)
      user = Repo.get(User, user_id)

      assert %User{name: "Luan", age: 19, id: ^user_id} = user
    end


  end

end
