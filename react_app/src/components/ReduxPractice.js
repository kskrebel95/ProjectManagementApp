import { React } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1>Profile page</h1>
      <p>Name:{user.name}</p>
      <p>Height:{user.height}</p>
      <p>Age:{user.age}</p>
    </div>
  );
};
const Login = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(login({ name: "Clark", height: 6, age: 22 }));
      }}
    >
      Login
    </button>
  );
};
const Logout = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(logout());
      }}
    >
      Logout
    </button>
  );
};

export const ReduxPractice = () => {
  return (
    <div>
      <Profile />
      <Login />
      <Logout />
    </div>
  );
};
