"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(119);
  const router = useRouter();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
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
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (
      e.key === "Enter" &&
      index === code.length - 1 &&
      code.every((digit) => digit !== "")
    ) {
      router.push("/new-password");
    }
  };

  const handleResendCode = () => {
    setTimeLeft(119);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-bl from-gray-100 to-gray-200">
      <div className="max-w-xl w-full bg-white p-12 shadow-xl rounded-lg">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">Pixelia</h1>
          <span className="text-sm text-gray-600 italic">
            Tu tienda de juegos
          </span>
        </div>

        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Recuperar tu cuenta
        </h2>
        <p className="text-xl text-center mb-10 text-gray-700">
          Te hemos enviado un código de 6 dígitos. Introdúcelo aquí para
          recuperar tu cuenta.
        </p>

        <div className="flex justify-center space-x-4 mb-10">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
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
            className="text-blue-500 hover:underline transition"
          >
            ¿No te llegó un código? Haz clic aquí para reenviar
          </Link>
        </div>
      </div>
    </div>
  );
}
