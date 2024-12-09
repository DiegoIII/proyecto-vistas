"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Tienda() {
  const [showDropdown, setShowDropdown] = useState(false);

  const sidebarItems = [
    { name: "Inicio", href: "/main" },
    { name: "Perfil", href: "/perfil" },
    { name: "Amigos", href: "/amigos" },
    { name: "Mensajes", href: "#" },
    { name: "Avatar", href: "#" },
    { name: "Inventario", href: "#" },
    { name: "Intercambiar", href: "#" },
    { name: "Noticias", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Mercancía", href: "/mercancia", active: true },
  ];

  const categorias = [
    "Accesorios",
    "Recomendado",
    "Ver todos los objetos",
    "Coleccionables",
  ];
  const filtros = [
    "Popular",
    "Menor Precio",
    "Mayor Precio",
    "Ofertas",
    "Paquetes",
  ];

  const productos = [
    { name: "Nombre de objeto 1", image: "Imagen 1", link: "#" },
    { name: "Nombre de objeto 2", image: "Imagen 2", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between px-10 py-4 bg-gradient-to-r from-blue-200 to-blue-300 shadow-md">
        {/* Logo de la marca */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-extrabold text-gray-800">Pixelia</h1>
          <span className="text-sm text-gray-600 italic">
            Tu tienda de juegos
          </span>
        </div>
        <nav className="flex gap-8">
          <a
            href="#"
            className="text-lg font-medium text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Juegos
          </a>
          <a
            href="#"
            className="text-lg font-medium text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Tienda de Avatares
          </a>
          <a
            href="#"
            className="text-lg font-medium text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Crear
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar"
              className="px-4 py-1 border border-gray-300 rounded-full outline-none transition duration-300 focus:border-gray-500"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-2 text-gray-500">
              🔍
            </button>
          </div>
          <button className="px-3 py-1 text-gray-700 hover:text-gray-900 transition duration-300">
            Español ▼
          </button>
        </div>
      </header>

      <div className="flex">
        <aside className="w-1/5 bg-white border-r shadow-lg p-6">
          <ul className="flex flex-col space-y-4 text-gray-700">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className={`${
                      item.active
                        ? "text-blue-600 font-semibold"
                        : "hover:text-blue-800 transition duration-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-blue-800 transition duration-300"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 p-8">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Tienda</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar"
                className="border border-gray-300 rounded-full px-4 py-2 pr-10 w-64"
              />
              <button className="absolute right-3 top-2.5 text-gray-500">
                🔍
              </button>
            </div>
          </header>

          {/* Categorías */}
          <div className="flex items-center justify-between mb-4 border-b pb-2">
            <div className="flex space-x-6">
              {categorias.map((categoria, index) => (
                <button
                  key={index}
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  {categoria}
                </button>
              ))}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="text-gray-700 border px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Filtrar ▼
              </button>
              {showDropdown && (
                <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border z-10">
                  {filtros.map((filtro, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer"
                    >
                      {filtro}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map((producto, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 flex flex-col items-center bg-white shadow-sm"
              >
                <h2 className="text-lg font-semibold mb-2 text-gray-700">
                  {producto.name}
                </h2>
                <div className="w-full h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-4 text-gray-600">
                  {producto.image}
                </div>
                <a
                  href={producto.link}
                  className="text-blue-600 hover:underline transition duration-300"
                >
                  Ver más
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
