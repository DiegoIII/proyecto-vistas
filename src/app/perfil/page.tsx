"use client";

import React from "react";
import Link from "next/link";

export default function Perfil() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between px-10 py-4 bg-gradient-to-r from-blue-200 to-blue-300 shadow-md">
        {/* Logo de la marca */}
        <div className="flex items-center gap-2">
          {/* Aquí podrías colocar una imagen si tuvieras un logo */}
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
        <aside className="w-1/5 p-6 bg-white border-r shadow-lg">
          <ul className="flex flex-col space-y-4 text-gray-700">
            <li>
              <Link
                href="/main"
                className="hover:text-gray-800 transition duration-300"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/perfil"
                className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
              >
                Perfil
              </Link>
            </li>
            <li>
              <Link
                href="/amigos"
                className="hover:text-gray-800 transition duration-300"
              >
                Amigos
              </Link>
            </li>
            <li>
              <a
                href="#mensajes"
                className="hover:text-gray-800 transition duration-300"
              >
                Mensajes
              </a>
            </li>
            <li>
              <a
                href="#avatar"
                className="hover:text-gray-800 transition duration-300"
              >
                Avatar
              </a>
            </li>
            <li>
              <a
                href="#inventario"
                className="hover:text-gray-800 transition duration-300"
              >
                Inventario
              </a>
            </li>
            <li>
              <a
                href="#intercambiar"
                className="hover:text-gray-800 transition duration-300"
              >
                Intercambiar
              </a>
            </li>
            <li>
              <a
                href="#noticias"
                className="hover:text-gray-800 transition duration-300"
              >
                Noticias
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-gray-800 transition duration-300"
              >
                Blog
              </a>
            </li>
            <li>
              <Link
                href="/mercancia"
                className="hover:text-gray-800 transition duration-300"
              >
                Mercancía
              </Link>
            </li>
          </ul>
        </aside>

        <main className="flex-1 p-8">
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                  Imagen
                </div>
                <button className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-2">
                  +
                </button>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <button className="text-blue-500 underline">
                  Modificar apariencia
                </button>
                <button className="text-blue-500 underline">
                  Comprar apariencia
                </button>
              </div>
              <div className="w-52 h-40 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600">
                Imagen
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">Nombre</h2>
                <p className="text-blue-500 underline">Nuevo nombre</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Descripción</h2>
                <div className="w-full bg-gray-300 rounded-lg p-4 text-gray-600">
                  Agregar nueva descripción
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
