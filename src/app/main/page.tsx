"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const juegosDestacados = [
    {
      nombre: "Red Dead Redemption 2",
      descripcion: "Una épica aventura en el viejo oeste",
      imagen: "/images/rdr2.jpg",
    },
    {
      nombre: "Cyberpunk 2077",
      descripcion: "Una experiencia futurista y oscura",
      imagen: "/images/cyberpunk.jpg",
    },
    {
      nombre: "Baldur's Gate 3",
      descripcion: "Un RPG clásico reinventado",
      imagen: "/images/bg3.jpg",
    },
    {
      nombre: "Grand Theft Auto V",
      descripcion: "Un mundo abierto lleno de acción",
      imagen: "/images/gtav.jpg",
    },
  ];

  const sidebarItems = [
    { name: "Inicio", href: "/main", active: true },
    { name: "Perfil", href: "/perfil" },
    { name: "Amigos", href: "/amigos" },
    { name: "Mensajes", href: "#mensajes" },
    { name: "Avatar", href: "#avatar" },
    { name: "Inventario", href: "#inventario" },
    { name: "Intercambiar", href: "#intercambiar" },
    { name: "Noticias", href: "#noticias" },
    { name: "Blog", href: "#blog" },
    { name: "Mercancía", href: "/mercancia" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex flex-wrap items-center justify-between px-4 md:px-10 py-4 bg-gradient-to-r from-blue-200 to-blue-300 shadow-md">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <h1 className="text-2xl font-extrabold text-gray-800">Pixelia</h1>
          <span className="text-sm text-gray-600 italic">
            Tu tienda de juegos
          </span>
        </div>

        {/* Botón hamburguesa para móvil */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-700 hover:text-gray-900 transition duration-300 mr-4"
          >
            ☰
          </button>
        </div>

        <nav className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-2 md:mb-0">
          <a
            href="#juegos"
            className="text-base md:text-lg font-medium text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Juegos
          </a>
          <a
            href="#tienda"
            className="text-base md:text-lg font-medium text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Tienda de Avatares
          </a>
          <a
            href="#crear"
            className="text-base md:text-lg font-medium text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Crear
          </a>
        </nav>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full px-4 py-1 border border-gray-300 rounded-full outline-none transition duration-300 focus:border-gray-500"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-2 text-gray-500">
              🔍
            </button>
          </div>
          <button className="px-3 py-1 text-gray-700 hover:text-gray-900 transition duration-300 hidden md:inline-block">
            Español ▼
          </button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Barra lateral escritorio */}
        <aside className="hidden md:block md:w-1/5 p-6 bg-white border-r shadow-lg">
          <ul className="flex flex-col space-y-4 text-gray-700">
            {sidebarItems.map((item, idx) =>
              item.href.startsWith("/") ? (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className={`${
                      item.active
                        ? "text-blue-600 font-semibold"
                        : "hover:text-gray-800 transition duration-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ) : (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-gray-800 transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </aside>

        {/* Barra lateral móvil (overlay) */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            {/* Fondo semi-transparente */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setSidebarOpen(false)}
            ></div>
            <aside className="relative bg-white w-4/5 max-w-xs p-6 shadow-xl z-50">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                onClick={() => setSidebarOpen(false)}
              >
                ✕
              </button>
              <ul className="flex flex-col space-y-4 text-gray-700 mt-8">
                {sidebarItems.map((item, idx) =>
                  item.href.startsWith("/") ? (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className={`block ${
                          item.active
                            ? "text-blue-600 font-semibold"
                            : "hover:text-gray-800 transition duration-300"
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ) : (
                    <li key={idx}>
                      <a
                        href={item.href}
                        className="block hover:text-gray-800 transition duration-300"
                        onClick={() => setSidebarOpen(false)}
                      >
                        {item.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </aside>
          </div>
        )}

        <main className="flex-1 p-4 md:p-8">
          {/* Sección principal del usuario: avatar principal y tagline */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-300 rounded-full flex items-center justify-center shadow-md">
              Imagen
            </div>
            <h2 className="mt-4 text-lg md:text-xl font-bold text-gray-700 text-center">
              ¡Bienvenido a Pixelia!
            </h2>
            <p className="text-gray-600 text-center">
              Explora, crea, y personaliza tu experiencia
            </p>
          </div>

          {/* Sección de destacados (Juegos populares) */}
          <section id="juegos" className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Juegos Destacados
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {juegosDestacados.map((juego, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-lg"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-md overflow-hidden shadow-md">
                    <Image
                      src={juego.imagen}
                      alt={juego.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2 text-center text-gray-700 font-medium text-sm md:text-base">
                    {juego.nombre}
                    <br />
                    {juego.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="tienda" className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Tienda de Avatares
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-lg"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-md flex items-center justify-center">
                    Avatar {index + 1}
                  </div>
                  <p className="mt-2 text-center text-gray-700 font-medium text-sm md:text-base">
                    Avatar Premium {index + 1}
                    <br />
                    Personaliza tu estilo
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="crear" className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Crear
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              En Pixelia puedes diseñar tus propios accesorios, juegos y más.
              Comparte tus creaciones con la comunidad y exhibe tu estilo único.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
