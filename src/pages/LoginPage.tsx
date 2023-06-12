import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 w-screen">
      <div className="max-w-lg w-full mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-16">
          <div className="flex flex-row mb-16">
            <div className="basis-1/2">
              <h2 className="text-2xl font-bold text-black">Masuk</h2>
            </div>
            <div className="basis-1/2 flex justify-end pt-2">
              <Link to="/register" className="text-main-color">
                Daftar
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block font-medium mb-2"></label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border border-main-color bg-white text-black px-4 py-2 w-full rounded-md"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block font-medium mb-2"
              ></label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="border border-main-color bg-white text-black px-4 py-2 w-full rounded-md"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-main-color text-white py-2 px-4 rounded-md w-full hover:bg-black mt-6"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
