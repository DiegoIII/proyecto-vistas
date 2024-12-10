"use client";

import React from "react";
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

export default function Perfil() {
  const sidebarItems = [
    {
      name: "Inicio",
      href: "/main",
      active: false,
      icon: <HomeIcon className="w-5 h-5" />,
    },
    {
      name: "Perfil",
      href: "/perfil",
      active: true,
      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      name: "Amigos",
      href: "/amigos",
      icon: <UsersIcon className="w-5 h-5" />,
    },
    {
      name: "Mensajes",
      href: "#mensajes",
      icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />,
    },
    {
      name: "Avatar",
      href: "#avatar",
      icon: <FaceSmileIcon className="w-5 h-5" />,
    },
    {
      name: "Inventario",
      href: "#inventario",
      icon: <GiftIcon className="w-5 h-5" />,
    },
    {
      name: "Intercambiar",
      href: "#intercambiar",
      icon: <ArrowPathIcon className="w-5 h-5" />,
    },
    {
      name: "Noticias",
      href: "#noticias",
      icon: <NewspaperIcon className="w-5 h-5" />,
    },
    {
      name: "Blog",
      href: "#blog",
      icon: <PencilSquareIcon className="w-5 h-5" />,
    },
    {
      name: "Mercancía",
      href: "/mercancia",
      icon: <ShoppingBagIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-bl from-gray-100 to-gray-200">
      <header className="flex items-center justify-between px-4 md:px-10 py-4 bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg">
        {/* Logo de la marca */}
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
        {/* Barra lateral escritorio */}
        <aside className="hidden md:flex md:flex-col md:w-1/5 p-6 bg-white border-r shadow-lg">
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
          <div className="w-full max-w-4xl mx-auto">
            {/* Hero o cabecera para el perfil */}
            <div className="relative mb-10">
              <div className="w-full h-40 md:h-48 bg-gradient-to-r from-indigo-300 via-blue-300 to-purple-200 rounded-md shadow-md"></div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center shadow-lg border-4 border-white text-gray-600 font-semibold">
                  Imagen
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8 mt-16">
              <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6">
                <div className="relative">
                  {/* Imagen grande de perfil */}
                  <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm md:text-base font-medium shadow-md">
                    Imagen
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition">
                    +
                  </button>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <button className="text-blue-600 font-semibold hover:underline transition">
                    Modificar apariencia
                  </button>
                  <button className="text-blue-600 font-semibold hover:underline transition">
                    Comprar apariencia
                  </button>
                </div>

                <div className="w-52 h-40 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-sm md:text-base font-medium shadow-md">
                  Imagen
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Nombre
                  </h2>
                  <p className="text-blue-600 font-semibold hover:underline transition cursor-pointer">
                    Nuevo nombre
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Descripción
                  </h2>
                  <div className="w-full bg-gray-200 rounded-lg p-4 text-gray-600 hover:bg-gray-300 transition cursor-pointer">
                    Agregar nueva descripción
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
