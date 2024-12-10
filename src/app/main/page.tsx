"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    {
      name: "Inicio",
      href: "/main",
      active: true,
      icon: <HomeIcon className="w-5 h-5" />,
    },
    { name: "Perfil", href: "/perfil", icon: <UserIcon className="w-5 h-5" /> },
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
      <header className="flex flex-wrap items-center justify-between px-4 md:px-10 py-4 bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg">
        <div className="flex items-center gap-2 mb-2 md:mb-0 text-white">
          <h1 className="text-2xl font-extrabold">Pixelia</h1>
          <span className="text-sm italic opacity-90">Tu tienda de juegos</span>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:text-gray-200 transition duration-300 mr-4"
          >
            ☰
          </button>
        </div>

        <nav className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-2 md:mb-0">
          <a
            href="#juegos"
            className="text-base md:text-lg font-medium text-white hover:text-gray-100 transition duration-300"
          >
            Juegos
          </a>
          <a
            href="#tienda"
            className="text-base md:text-lg font-medium text-white hover:text-gray-100 transition duration-300"
          >
            Tienda de Avatares
          </a>
          <a
            href="#crear"
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
        <aside className="hidden md:flex md:flex-col md:w-1/5 p-6 bg-white border-r shadow-lg">
          <ul className="flex flex-col space-y-4 text-gray-700">
            {sidebarItems.map((item, idx) => (
              <li key={idx}>
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
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 flex flex-col overflow-y-auto p-4 md:p-8 bg-gradient-to-b from-white to-gray-50">
          <div className="relative flex flex-col items-center mb-10">
            <div className="w-full h-48 md:h-56 bg-gradient-to-r from-indigo-300 via-blue-300 to-purple-200 rounded-md shadow-md mb-[-50px]"></div>
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-300 rounded-full flex items-center justify-center shadow-lg relative z-10 mt-16 border-4 border-white">
              Imagen
            </div>
            <h2 className="mt-4 text-lg md:text-xl font-bold text-gray-700 text-center">
              ¡Bienvenido a Pixelia!
            </h2>
            <p className="text-gray-600 text-center">
              Explora, crea y personaliza tu experiencia
            </p>
          </div>

          <section id="juegos" className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Juegos Destacados
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {juegosDestacados.map((juego, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
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
                    <span className="block font-semibold">{juego.nombre}</span>
                    <span className="block text-gray-500 text-xs md:text-sm">
                      {juego.descripcion}
                    </span>
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
              {[
                {
                  nombre: "Avatar 1",
                  descripcion: "Un estilo clásico y elegante",
                  imagen: "/images/avatar1.jpg",
                },
                {
                  nombre: "Avatar 2",
                  descripcion: "Diseño futurista y moderno",
                  imagen: "/images/avatar2.jpg",
                },
                {
                  nombre: "Avatar 3",
                  descripcion: "Calaca bien maniaca",
                  imagen: "/images/avatar3.jpg",
                },
                {
                  nombre: "Avatar 4",
                  descripcion: "Caballero Medieval",
                  imagen: "/images/avatar4.jpg",
                },
              ].map((avatar, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-md overflow-hidden shadow-md">
                    <Image
                      src={avatar.imagen}
                      alt={avatar.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2 text-center text-gray-700 font-medium text-sm md:text-base">
                    <span className="block font-semibold">{avatar.nombre}</span>
                    <span className="block text-gray-500 text-xs md:text-sm">
                      {avatar.descripcion}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="crear" className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Crear
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Pixelia es una tienda de juegos segura y confiable, donde puedes
              econtrar todo tipo de lanzamientos de juegos.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
