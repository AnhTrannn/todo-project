import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

interface Props {
  onSuccess: () => void;
}

const Login = ({ onSuccess }: Props): JSX.Element => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const { username, password } = Object.fromEntries(formData);

    if (username === "admin" && password === "123") {
      navigate("/");
      onSuccess();
    } else {
      setError("Username or password is incorrect");
    }
  };

  return (
    <div>
      <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold mb-4">Login Page</h2>
        <form
          className="flex flex-col border-2 border-sky-500"
          onSubmit={onSubmit}
        >
          <label className="font-bold mx-2 my-2" htmlFor="username">
            <span className="mr-4">Username</span>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
            />
          </label>
          <label
            className="block text-gray-700 font-bold mx-3 my-2"
            htmlFor="password"
          >
            <span className="mr-4">Password</span>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </label>
          <button className="bg-blue-500 mx-2 my-2 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
        </form>
        {error && <div className="text-danger">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
