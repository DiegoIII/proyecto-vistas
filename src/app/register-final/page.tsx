"use client";

import React, { useState } from "react";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-md rounded-lg">
        {/* Progreso con palomita */}
        <div className="flex justify-between mb-6">
          {/* Paso 1 completado */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <div className="flex-grow border-t border-gray-300 mx-4"></div>

          {/* Paso 2 */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-300 text-black rounded-full flex items-center justify-center">
              2
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form className="space-y-6">
          {/* Nombre de usuario */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre de usuario
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Introduce un nombre de usuario"
            />
          </div>

          {/* Contraseña */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Introduce tu contraseña"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
            <p className="mt-2 text-sm text-gray-500">Mínimo 8 caracteres</p>
          </div>

          {/* Confirmar contraseña */}
          <div className="relative">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirmar contraseña
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Confirma tu contraseña"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {showConfirmPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          {/* Términos y condiciones */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-black">
              Acepto los{" "}
              <a href="/terms" className="font-medium text-black underline">
                Términos y condiciones de uso
              </a>
              . Consulta nuestra{" "}
              <a href="/terms" className="font-medium text-black underline">
                Política de privacidad
              </a>
              .
            </label>
          </div>

          {/* Botón de enviar */}
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
