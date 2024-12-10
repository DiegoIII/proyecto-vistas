"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  FaceSmileIcon,
  GiftIcon,
  ArrowPathIcon,
  NewspaperIcon,
  PencilSquareIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

export default function Tienda() {
  const [showDropdown, setShowDropdown] = useState(false);

  const sidebarItems = [
    { name: "Inicio", href: "/main", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "Perfil", href: "/perfil", icon: <UserIcon className="w-5 h-5" /> },
    {
      name: "Amigos",
      href: "/amigos",
      icon: <UsersIcon className="w-5 h-5" />,
    },
    {
      name: "Mensajes",
      href: "#",
      icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />,
    },
    { name: "Avatar", href: "#", icon: <FaceSmileIcon className="w-5 h-5" /> },
    { name: "Inventario", href: "#", icon: <GiftIcon className="w-5 h-5" /> },
    {
      name: "Intercambiar",
      href: "#",
      icon: <ArrowPathIcon className="w-5 h-5" />,
    },
    {
      name: "Noticias",
      href: "#",
      icon: <NewspaperIcon className="w-5 h-5" />,
    },
    { name: "Blog", href: "#", icon: <PencilSquareIcon className="w-5 h-5" /> },
    {
      name: "Mercancía",
      href: "/mercancia",
      active: true,
      icon: <ShoppingBagIcon className="w-5 h-5" />,
    },
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
    <div className="min-h-screen flex flex-col bg-gradient-to-bl from-gray-100 to-gray-200">
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

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <aside className="hidden md:flex md:flex-col md:w-1/5 bg-white border-r shadow-lg p-6">
          <ul className="flex flex-col space-y-4 text-gray-700">
            {sidebarItems.map((item, idx) => (
              <li key={idx}>
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 px-2 py-2 rounded-md transition duration-300 ${
                      item.active
                        ? "bg-indigo-100 text-indigo-600 font-semibold"
                        : "hover:bg-gray-100 hover:text-gray-800"
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-100 hover:text-gray-800 transition duration-300"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 p-4 md:p-8 bg-gradient-to-b from-white to-gray-50 overflow-y-auto">
          <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <h1 className="text-3xl font-bold text-gray-800">Tienda</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar"
                className="border border-gray-300 rounded-full px-4 py-2 pr-10 w-64 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
              <button className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 transition">
                🔍
              </button>
            </div>
          </header>

          {/* Categorías y Filtros */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 border-b pb-2 gap-4">
            <div className="flex space-x-4 md:space-x-6 overflow-x-auto">
              {categorias.map((categoria, index) => (
                <button
                  key={index}
                  className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium whitespace-nowrap"
                >
                  {categoria}
                </button>
              ))}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="text-gray-700 border px-4 py-2 rounded-lg hover:bg-gray-100 transition font-medium flex items-center gap-1"
              >
                Filtrar <span className="text-sm">▼</span>
              </button>
              {showDropdown && (
                <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border z-10 overflow-hidden">
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
                className="border rounded-lg p-4 flex flex-col items-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-lg font-semibold mb-2 text-gray-700 text-center">
                  {producto.name}
                </h2>
                <div className="w-full h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-4 text-gray-600 font-medium">
                  {producto.image}
                </div>
                <a
                  href={producto.link}
                  className="text-blue-600 hover:underline transition duration-300 font-medium"
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
