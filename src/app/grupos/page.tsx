"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Grupos() {
  const router = useRouter();
  const [grupoSeleccionado, setGrupoSeleccionado] = useState("Grupo A");

  const grupos = [
    {
      nombre: "Grupo A",
      descripcion: "Descripción del Grupo A",
      miembros: ["Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4"],
      totalMiembros: "4/20",
    },
    {
      nombre: "Grupo B",
      descripcion: "Descripción del Grupo B",
      miembros: ["Jugador 5", "Jugador 6", "Jugador 7"],
      totalMiembros: "3/15",
    },
    {
      nombre: "Grupo C",
      descripcion: "Descripción del Grupo C",
      miembros: ["Jugador 8", "Jugador 9", "Jugador 10", "Jugador 11"],
      totalMiembros: "4/30",
    },
  ];

  const grupoActual = grupos.find(
    (grupo) => grupo.nombre === grupoSeleccionado
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-bl from-gray-100 to-gray-200">
      {/* Encabezado principal (similar a otros componentes) */}
      <header className="flex flex-wrap items-center justify-between px-4 md:px-10 py-4 bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg">
        <div className="flex items-center gap-2 text-white">
          <h1 className="text-2xl font-extrabold">Pixelia</h1>
          <span className="text-sm italic opacity-90">Tu tienda de juegos</span>
        </div>

        <nav className="flex gap-4 md:gap-8">
          <a
            href="#"
            className="text-base md:text-lg font-medium text-white hover:text-gray-100 transition duration-300"
          >
            Juegos
          </a>
          <a
            href="#"
            className="text-base md:text-lg font-medium text-white hover:text-gray-100 transition duration-300"
          >
            Tienda de Avatares
          </a>
          <a
            href="#"
            className="text-base md:text-lg font-medium text-white hover:text-gray-100 transition duration-300"
          >
            Crear
          </a>
        </nav>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full px-4 py-1 rounded-full outline-none bg-white text-gray-700 placeholder-gray-400 shadow-inner focus:ring-2 focus:ring-indigo-300"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-2 text-gray-500 hover:text-gray-700 transition">
              🔍
            </button>
          </div>
          <button className="px-3 py-1 text-white hover:text-gray-200 transition duration-300 hidden md:inline-block">
            Español ▼
          </button>
        </div>
      </header>

      <div className="p-4 md:p-8 flex flex-col gap-6 overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Grupos</h1>
          {/* Botón para regresar a la página anterior */}
          <button
            className="flex items-center gap-2 text-gray-700 font-medium px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            onClick={() => router.back()}
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Regresar
          </button>
        </div>

        {/* Filtros superiores para grupos */}
        <div className="flex justify-between items-center">
          <nav className="flex space-x-4 overflow-x-auto">
            {["Recientes", "En común", "Miembros", "Públicos"].map((item) => (
              <button
                key={item}
                className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition whitespace-nowrap"
              >
                {item}
              </button>
            ))}
          </nav>
          <button className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition">
            Filtrar
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Lista de grupos */}
          <div className="lg:w-1/3 space-y-4">
            {grupos.map((grupo) => (
              <div
                key={grupo.nombre}
                className={`flex items-center p-4 shadow-sm rounded-lg cursor-pointer transition ${
                  grupoSeleccionado === grupo.nombre
                    ? "bg-indigo-100 border border-indigo-300"
                    : "bg-white hover:shadow-md"
                }`}
                onClick={() => setGrupoSeleccionado(grupo.nombre)}
              >
                <div className="h-16 w-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-medium">
                  Img
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">
                    {grupo.nombre}
                  </h3>
                  <p className="text-sm text-gray-500">{grupo.totalMiembros}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Detalles del grupo seleccionado */}
          <div className="flex-1 bg-gray-200 p-4 rounded-md shadow-inner">
            <div className="h-40 w-40 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-700 font-medium">
              Img
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-800">Nombre:</p>
              <p className="text-gray-700 mb-2">
                {grupoActual?.nombre || "No disponible"}
              </p>
              <p className="font-bold text-gray-800 mt-2">Descripción:</p>
              <p className="text-gray-700 mb-2">
                {grupoActual?.descripcion || "No disponible"}
              </p>
              <p className="font-bold text-gray-800 mt-2">Miembros:</p>
              <p className="text-gray-700">
                {grupoActual?.totalMiembros || "No disponible"}
              </p>
            </div>
          </div>

          {/* Lista de miembros del grupo */}
          <div className="lg:w-1/3 bg-white p-4 rounded-lg shadow-sm">
            <h2 className="font-bold mb-2 text-gray-800">Miembros:</h2>
            <ul className="space-y-2">
              {grupoActual?.miembros?.length ? (
                grupoActual.miembros.map((miembro, index) => (
                  <li key={index} className="text-gray-700 font-medium">
                    {miembro}
                  </li>
                ))
              ) : (
                <p className="text-gray-500">Sin miembros disponibles</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
