"use client";

import React from "react";

export default function Foto() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 h-48 bg-gray-300 rounded-xl flex items-center justify-center border border-gray-400">
        <p className="text-center text-gray-700">
          Arrastre aquí la foto que desee usar
        </p>
      </div>
    </div>
  );
}
