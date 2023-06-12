import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [birth_date, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAddress(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value !== password) {
      setPasswordError("Password tidak cocok");
      setIsButtonDisabled(true);
    } else {
      setPasswordError("");
      setIsButtonDisabled(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("First Name:", first_name);
    console.log("Last Name:", last_name);
    console.log("Email:", email);
    console.log("Phone Number:", phone);
    console.log("Gender:", gender);
    console.log("Birthdate:", birth_date);
    console.log("Address:", address);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    if (password === confirmPassword) {
      console.log("Registrasi berhasil!");
      // Lakukan tindakan lanjutan setelah registrasi berhasil
    } else {
      setPasswordError("Password tidak cocok");
      setIsButtonDisabled(true);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen w-screen">
      <div className="max-w-lg w-full mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-12 py-6">
          <h2 className="text-2xl font-bold text-black text-center">
            Daftar Sekarang
          </h2>
          <p className="text-black mb-8 text-center">
            Sudah memiliki akun?{" "}
            <Link to="/login" className="text-primary">
              Masuk
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Nama Depan"
                  className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                  value={first_name}
                  onChange={handleFirstNameChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Nama Belakang"
                  className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                  value={last_name}
                  onChange={handleLastNameChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                placeholder="Nomor Handphone"
                className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <select
                  id="gender"
                  className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                  value={gender}
                  onChange={handleGenderChange}
                  required
                >
                  <option value="">Jenis Kelamin</option>
                  <option value="male">Laki-Laki</option>
                  <option value="female">Perempuan</option>
                </select>
              </div>
              <div>
                <input
                  type="date"
                  id="birthdate"
                  className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                  value={birth_date}
                  onChange={handleBirthdateChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                id="address"
                placeholder="Alamat"
                className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md resize-none"
                value={address}
                onChange={handleAddressChange}
                required
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Konfirmasi Password"
                  className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-lg rounded-md"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className={`btn btn-ghost bg-primary text-white py-2 px-4 rounded-md w-full drop-shadow-xl hover:bg-black mt-6 ${
                isButtonDisabled
                  ? "disabled:bg-gray-300 cursor-not-allowed"
                  : ""
              }`}
              disabled={isButtonDisabled}
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
