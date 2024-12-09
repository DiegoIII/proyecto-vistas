"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa useRouter desde next/navigation
import Link from "next/link";

type Language =
  | "Español"
  | "English"
  | "Deutsch"
  | "Italiano"
  | "Français"
  | "Português";

const translations: Record<Language, { [key: string]: string }> = {
  Español: {
    welcome: "Bienvenido",
    email: "Correo electrónico",
    password: "Contraseña",
    forgotPassword: "¿Olvidaste tu contraseña?",
    login: "Iniciar",
    noAccount: "¿No tienes una cuenta?",
    signUp: "Regístrate aquí",
  },
  English: {
    welcome: "Welcome",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot your password?",
    login: "Login",
    noAccount: "Don't have an account?",
    signUp: "Sign up here",
  },
  Deutsch: {
    welcome: "Willkommen",
    email: "E-Mail",
    password: "Passwort",
    forgotPassword: "Haben Sie Ihr Passwort vergessen?",
    login: "Anmelden",
    noAccount: "Kein Konto?",
    signUp: "Hier registrieren",
  },
  Italiano: {
    welcome: "Benvenuto",
    email: "Email",
    password: "Password",
    forgotPassword: "Hai dimenticato la password?",
    login: "Accedi",
    noAccount: "Non hai un account?",
    signUp: "Iscriviti qui",
  },
  Français: {
    welcome: "Bienvenue",
    email: "Email",
    password: "Mot de passe",
    forgotPassword: "Mot de passe oublié?",
    login: "Connexion",
    noAccount: "Vous n'avez pas de compte?",
    signUp: "Inscrivez-vous ici",
  },
  Português: {
    welcome: "Bem-vindo",
    email: "Email",
    password: "Senha",
    forgotPassword: "Esqueceu sua senha?",
    login: "Entrar",
    noAccount: "Não tem uma conta?",
    signUp: "Cadastre-se aqui",
  },
};

export default function LoginPage() {
  const [language, setLanguage] = useState<Language>("Español");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Instancia de useRouter

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí podrías agregar tu lógica de autenticación, por ejemplo, llamar a una API

    // Si la autenticación es exitosa, redirige a la página principal
    router.push("/main"); // Asegúrate de que la ruta de redirección sea correcta
  };

  const languages: Language[] = [
    "Español",
    "English",
    "Deutsch",
    "Italiano",
    "Français",
    "Português",
  ];

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="flex justify-end mb-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="rounded-full border border-black p-2"
            aria-label="Select Language"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <h1 className="login-header">{translations[language].welcome}</h1>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="login-label">
              {translations[language].email}:
            </label>
            <input
              type="email"
              id="email"
              className="login-input"
              aria-label={translations[language].email}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="login-label">
              {translations[language].password}:
            </label>
            <input
              type="password"
              id="password"
              className="login-input"
              aria-label={translations[language].password}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <Link href="/forgot-password" className="login-link">
              {translations[language].forgotPassword}
            </Link>
          </div>

          <button type="submit" className="login-button">
            {translations[language].login}
          </button>

          <div className="login-footer">
            {translations[language].noAccount}{" "}
            <Link href="/signup" className="login-link">
              {translations[language].signUp}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
