"use client";

import {
  FaGoogle,
  FaFacebookF,
  FaMicrosoft,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Regístrate con:
        </h1>

        <div className="space-y-4">
          {/* Botón de Google */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
            <FaGoogle className="text-red-500 mr-3" />
            Continuar con Google
          </button>

          {/* Botón de Facebook */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
            <FaFacebookF className="text-blue-600 mr-3" />
            Continuar con Facebook
          </button>

          {/* Botón de Microsoft */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
            <FaMicrosoft className="text-green-500 mr-3" />
            Continuar con Microsoft
          </button>

          {/* Botón de Correo electrónico */}
          <button
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
            onClick={() => (window.location.href = "/register-form")}
          >
            <FaEnvelope className="text-red-500 mr-3" />
            Continuar con Correo electrónico
          </button>

          {/* Botón de número de celular */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
            <FaMobileAlt className="text-gray-500 mr-3" />
            Continuar con número de celular
          </button>
        </div>

        <div className="text-center text-sm text-gray-600 mt-6">
          Al continuar, aceptas los{" "}
          <a href="/terms" className="underline font-semibold">
            Términos y condiciones de uso
          </a>
          . Consulta nuestra{" "}
          <a href="/terms" className="underline font-semibold">
            Política de privacidad
          </a>
          .
        </div>
      </div>
    </div>
  );
}
