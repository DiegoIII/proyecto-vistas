"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Cambiado a next/navigation

export default function ForgotPassword() {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(119); // 2 minutos en segundos
  const router = useRouter(); // Inicializamos el router para redirecciones

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // Asegura que solo se permiten dígitos
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Enfoca el siguiente input si hay un valor
    if (value && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      // Mueve el foco al input anterior en caso de Backspace
      inputRefs.current[index - 1]?.focus();
    } else if (
      e.key === "Enter" &&
      index === code.length - 1 &&
      code.every((digit) => digit !== "")
    ) {
      // Si está en el último campo y todos los campos están llenos, redirige
      router.push("/new-password"); // Aquí defines la ruta a la nueva página
    }
  };

  const handleResendCode = () => {
    // Resetea el tiempo a 2 minutos (120 segundos) cuando se hace clic en reenviar
    setTimeLeft(119);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-xl w-full bg-white p-12 shadow-xl rounded-lg">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Recuperar tu cuenta
        </h2>
        <p className="text-xl text-center mb-10">
          Te hemos enviado un código de 6 dígitos. Introdúcelo aquí para
          recuperar tu cuenta.
        </p>

        <div className="flex justify-center space-x-4 mb-10">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                // Inicializa el array en el índice correcto si no existe
                if (!inputRefs.current[index]) {
                  inputRefs.current[index] = null;
                }
                inputRefs.current[index] = el;
              }}
              type="text"
              maxLength={1}
              className="w-16 h-16 border-2 border-gray-400 rounded-lg text-center text-3xl font-bold focus:border-blue-500 focus:outline-none"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <p className="text-lg text-gray-500 text-center mb-8">
          {timeLeft > 0
            ? `El código vencerá en ${formatTime(timeLeft)}`
            : "El código ha vencido"}
        </p>

        <div className="text-center text-lg">
          <Link
            href="#"
            onClick={handleResendCode}
            className="text-blue-500 hover:underline"
          >
            ¿No te llegó un código? Haz clic aquí para reenviar
          </Link>
        </div>
      </div>
    </div>
  );
}
