"use client";

import { useState } from "react";

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    uppercase: false,
    length: false,
    number: false,
  });

  const validatePassword = (value: string) => {
    setErrors({
      uppercase: !/[A-Z]/.test(value),
      number: !/[0-9]/.test(value),
      length: value.length < 8,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setConfirmPassword(e.target.value);

  const isFormValid =
    password === confirmPassword &&
    !errors.uppercase &&
    !errors.length &&
    !errors.number;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Nueva contraseña:
        </h2>
        <input
          type="password"
          placeholder="Introduce tu contraseña nueva"
          value={password}
          onChange={handlePasswordChange}
          className="w-full p-4 mb-4 border rounded-lg"
        />

        <div className="text-red-500 text-sm mb-6">
          <p>Tu contraseña debe tener:</p>
          <ul className="list-disc list-inside">
            <li
              className={errors.uppercase ? "text-red-500" : "text-green-500"}
            >
              Al menos una mayúscula
            </li>
            <li className={errors.length ? "text-red-500" : "text-green-500"}>
              Mínimo 8 caracteres
            </li>
            <li className={errors.number ? "text-red-500" : "text-green-500"}>
              Al menos un número
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Confirmar contraseña:
        </h2>
        <input
          type="password"
          placeholder="Confirma tu contraseña nueva"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="w-full p-4 mb-4 border rounded-lg"
        />

        {password && confirmPassword && password !== confirmPassword && (
          <p className="text-red-500 text-sm mb-4">
            Las contraseñas no coinciden
          </p>
        )}

        <button
          className={`w-full p-4 bg-blue-500 text-white rounded-lg ${
            !isFormValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isFormValid}
        >
          Guardar nueva contraseña
        </button>
      </div>
    </div>
  );
}
