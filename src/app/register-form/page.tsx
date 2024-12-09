"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FormValues {
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: string;
  pais: string;
}

interface FormErrors {
  nombres: boolean;
  apellidos: boolean;
  correo: boolean;
  telefono: boolean;
}

const RegisterForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    nombres: "",
    apellidos: "",
    correo: "",
    telefono: "",
    pais: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    nombres: false,
    apellidos: false,
    correo: false,
    telefono: false,
  });

  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {
      nombres: !formValues.nombres.trim(),
      apellidos: !formValues.apellidos.trim(),
      correo: !formValues.correo.trim(),
      telefono: !formValues.telefono.trim(),
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      console.log("Formulario enviado exitosamente");
      router.push("/register-final");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
        <div className="flex justify-between mb-4">
          <div className="w-8 h-8 bg-green-400 rounded-full text-white flex items-center justify-center">
            1
          </div>
          <div className="flex-grow border-t border-gray-300 mx-2"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full text-gray-600 flex items-center justify-center">
            2
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {["nombres", "apellidos", "correo", "telefono"].map(
            (field, index) => (
              <div key={index} className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 capitalize"
                  htmlFor={field}
                >
                  {field}
                </label>
                <input
                  type={field === "correo" ? "email" : "text"}
                  name={field}
                  value={formValues[field as keyof FormValues]}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder={`Introduce tu ${field}`}
                />
                {errors[field as keyof FormErrors] && (
                  <p className="text-red-500 text-sm mt-1">
                    ¡Campo obligatorio!
                  </p>
                )}
              </div>
            )
          )}

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
            onClick={() => router.push("/")}
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
