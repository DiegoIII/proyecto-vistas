"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-xl font-bold border-b pb-2 mb-4">Marca</header>
      <h1 className="text-2xl font-semibold mb-4">Grupos</h1>

      {/* Botón para regresar a la página anterior */}
      <button
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => router.back()}
      >
        ← Regresar
      </button>

      <div className="flex justify-between items-center mb-4">
        <nav className="space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Recientes
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            En común
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Miembros
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Públicos
          </button>
        </nav>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Filtrar
        </button>
      </div>

      <div className="flex gap-4">
        {/* Lista de grupos */}
        <div className="w-1/3 space-y-4">
          {grupos.map((grupo) => (
            <div
              key={grupo.nombre}
              className={`flex items-center p-4 shadow rounded cursor-pointer ${
                grupoSeleccionado === grupo.nombre
                  ? "bg-blue-100 border border-blue-300"
                  : "bg-white"
              }`}
              onClick={() => setGrupoSeleccionado(grupo.nombre)}
            >
              <div className="h-16 w-16 bg-gray-300 rounded-full flex items-center justify-center">
                Imagen
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">{grupo.nombre}</h3>
                <p className="text-sm text-gray-500">{grupo.totalMiembros}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detalles del grupo seleccionado */}
        <div className="flex-1 bg-gray-200 p-4 rounded">
          <div className="h-40 w-40 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
            Imagen
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="font-bold">Nombre:</p>
            <p>{grupoActual?.nombre || "No disponible"}</p>
            <p className="font-bold mt-2">Descripción:</p>
            <p>{grupoActual?.descripcion || "No disponible"}</p>
            <p className="font-bold mt-2">Miembros:</p>
            <p>{grupoActual?.totalMiembros || "No disponible"}</p>
          </div>
        </div>

        {/* Lista de miembros del grupo */}
        <div className="w-1/3 bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-2">Miembros:</h2>
          <ul className="space-y-2">
            {grupoActual?.miembros?.length ? (
              grupoActual.miembros.map((miembro, index) => (
                <li key={index} className="text-gray-700">
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
  );
}
