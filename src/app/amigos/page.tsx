"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

export default function Amigos() {
  const router = useRouter();

  const navItems = [
    { name: "Juegos", href: "#" },
    { name: "Tienda de Avatares", href: "#" },
    { name: "Crear", href: "#" },
  ];

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
      active: false,
      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      name: "Amigos",
      href: "/amigos",
      active: true,
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
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base md:text-lg font-medium text-white hover:text-gray-100 transition duration-300"
            >
              {item.name}
            </a>
          ))}
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
          <div className="flex justify-between items-center mb-8">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition duration-300">
              <span className="text-xl leading-none">+</span> Añadir amigo
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 border rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition duration-300"
              onClick={() => router.push("/grupos")}
            >
              <span className="text-xl leading-none">+</span> Grupos
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["En línea", "Fuera de línea"].map((status, idx) => (
              <div key={status}>
                <h2
                  className={`text-xl md:text-2xl font-semibold mb-4 ${
                    idx === 0 ? "text-teal-600" : "text-gray-500"
                  }`}
                >
                  {status}
                </h2>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4 text-gray-600 font-medium">
                        Img
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Nombre</p>
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
