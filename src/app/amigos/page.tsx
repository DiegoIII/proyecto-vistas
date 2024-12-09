"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Amigos() {
  const router = useRouter();

  const navItems = [
    { name: "Juegos", href: "#" },
    { name: "Tienda de Avatares", href: "#" },
    { name: "Crear", href: "#" },
  ];

  const sidebarItems = [
    { name: "Inicio", href: "/main" },
    { name: "Perfil", href: "/perfil" },
    { name: "Amigos", href: "/amigos", active: true },
    { name: "Mensajes", href: "#" },
    { name: "Avatar", href: "#" },
    { name: "Inventario", href: "#" },
    { name: "Intercambiar", href: "#" },
    { name: "Noticias", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Mercancía", href: "/mercancia" },
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
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-gray-600 hover:text-gray-800 transition duration-300"
            >
              {item.name}
            </a>
          ))}
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
        <aside className="w-1/5 p-6 bg-white border-r shadow-lg">
          <ul className="flex flex-col space-y-4 text-gray-700">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className={`${
                      item.active ? "text-blue-600 font-semibold" : ""
                    } hover:text-blue-800 transition duration-300`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-gray-800 transition duration-300"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <button className="flex items-center px-4 py-2 border rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition duration-300">
              + Añadir amigo
            </button>
            <button
              className="flex items-center px-4 py-2 border rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition duration-300"
              onClick={() => router.push("/grupos")}
            >
              + Grupos
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {["En línea", "Fuera de línea"].map((status, idx) => (
              <div key={status}>
                <h2
                  className={`text-xl font-semibold ${
                    idx === 0 ? "text-teal-600" : "text-gray-500"
                  } mb-4`}
                >
                  {status}
                </h2>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 border rounded-lg shadow-sm"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        Imagen
                      </div>
                      <div>
                        <p className="font-semibold">Nombre</p>
                        <p
                          className={
                            idx === 0 ? "text-teal-600" : "text-gray-500"
                          }
                        >
                          {status === "En línea" ? "Online" : "Offline"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
