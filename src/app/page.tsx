"use client";

import { useState } from "react";
import Link from "next/link";

// Definimos el tipo que contiene solo los idiomas soportados
type Language =
  | "Español"
  | "English"
  | "Deutsch"
  | "Italiano"
  | "Français"
  | "Português";

export default function Home() {
  const [language, setLanguage] = useState<Language>("Español");

  const translations: Record<
    Language,
    {
      welcome: string;
      email: string;
      password: string;
      forgotPassword: string;
      login: string;
      noAccount: string;
      signUp: string;
    }
  > = {
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
        {/* Language Selector */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="language-select" className="sr-only">
              Language
            </label>
            <select
              id="language-select"
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
        </div>

        {/* Welcome Message */}
        <h1 className="login-header">{translations[language].welcome}</h1>

        {/* Login Form */}
        <form className="space-y-6">
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
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-center">
            <Link href="/forgot-password" className="login-link">
              {translations[language].forgotPassword}
            </Link>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-button">
            {translations[language].login}
          </button>

          {/* Sign Up Link */}
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
