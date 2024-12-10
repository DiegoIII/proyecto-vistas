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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-bl from-gray-100 to-gray-200">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Encabezado de marca */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">Pixelia</h1>
          <span className="text-sm text-gray-600 italic">
            Tu tienda de juegos
          </span>
        </div>

        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Regístrate con:
        </h1>

        <div className="space-y-4">
          {/* Botón de Google */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
            <FaGoogle className="text-red-500 mr-3" />
            <span className="font-medium text-gray-700">
              Continuar con Google
            </span>
          </button>

          {/* Botón de Facebook */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
            <FaFacebookF className="text-blue-600 mr-3" />
            <span className="font-medium text-gray-700">
              Continuar con Facebook
            </span>
          </button>

          {/* Botón de Microsoft */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
            <FaMicrosoft className="text-green-500 mr-3" />
            <span className="font-medium text-gray-700">
              Continuar con Microsoft
            </span>
          </button>

          {/* Botón de Correo electrónico */}
          <button
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
            onClick={() => (window.location.href = "/register-form")}
          >
            <FaEnvelope className="text-red-500 mr-3" />
            <span className="font-medium text-gray-700">
              Continuar con Correo electrónico
            </span>
          </button>

          {/* Botón de número de celular */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
            <FaMobileAlt className="text-gray-500 mr-3" />
            <span className="font-medium text-gray-700">
              Continuar con número de celular
            </span>
          </button>
        </div>

        <div className="text-center text-sm text-gray-600 mt-6">
          Al continuar, aceptas los{" "}
          <a
            href="/terms"
            className="underline font-semibold hover:text-blue-600 transition"
          >
            Términos y condiciones de uso
          </a>
          . Consulta nuestra{" "}
          <a
            href="/terms"
            className="underline font-semibold hover:text-blue-600 transition"
          >
            Política de privacidad
          </a>
          .
        </div>
      </div>
    </div>
  );
}
