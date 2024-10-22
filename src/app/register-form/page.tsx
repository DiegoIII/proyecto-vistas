"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importamos useRouter

const RegisterForm = () => {
  const [formValues, setFormValues] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    telefono: "",
    pais: "",
  });

  const [errors, setErrors] = useState({
    nombres: false,
    apellidos: false,
    correo: false,
    telefono: false,
  });

  const router = useRouter(); // Usamos el hook de router

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      nombres: formValues.nombres === "",
      apellidos: formValues.apellidos === "",
      correo: formValues.correo === "",
      telefono: formValues.telefono === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      console.log("Formulario enviado exitosamente");
      // Redirigir a la página de register-final
      router.push("/register-final");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
        <div className="flex justify-between mb-4">
          <div className="flex items-center justify-center w-8 h-8 bg-green-400 rounded-full text-white">
            1
          </div>
          <div className="flex-grow border-t border-gray-300 mx-2"></div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full text-gray-600">
            2
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nombre(s)
            </label>
            <input
              type="text"
              name="nombres"
              value={formValues.nombres}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Introduce tus nombres"
            />
            {errors.nombres && (
              <p className="text-red-500 text-sm mt-1">¡Campo obligatorio!</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Apellido(s)
            </label>
            <input
              type="text"
              name="apellidos"
              value={formValues.apellidos}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Introduce tus apellidos"
            />
            {errors.apellidos && (
              <p className="text-red-500 text-sm mt-1">¡Campo obligatorio!</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              name="correo"
              value={formValues.correo}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Introduce tu correo electrónico"
            />
            {errors.correo && (
              <p className="text-red-500 text-sm mt-1">¡Campo obligatorio!</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Número Telefónico
            </label>
            <input
              type="tel"
              name="telefono"
              value={formValues.telefono}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Introduce un número telefónico o celular"
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm mt-1">¡Campo obligatorio!</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              País
            </label>
            <select
              name="pais"
              value={formValues.pais}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Selecciona un país</option>
              <option value="Mexico">México</option>
              <option value="Colombia">Colombia</option>
              <option value="Palestina">Palestina</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
          >
            Siguiente
          </button>
        </form>

        <div className="mt-4 text-center">
          <a
            href="#"
            onClick={() => router.push("/")} // Redirigir a la página principal
            className="text-sm text-gray-500 hover:underline"
          >
            ¿Ya tienes cuenta?
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
