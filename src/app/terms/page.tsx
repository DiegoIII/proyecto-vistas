export default function TermsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="w-full max-w-3xl bg-white p-10 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Política de Privacidad
        </h1>
        <p className="text-lg mb-4">
          En (Nombre) nos comprometemos a cumplir con nuestras siguientes normas
          para respetar tu privacidad:
        </p>

        <ul className="list-disc list-inside mb-6 text-lg space-y-4">
          <li>
            No compartimos información de identificación personal con socios de
            publicidad, medición o análisis sin el permiso del usuario.
          </li>
          <li>
            Recopilamos información sobre cómo los usuarios usan los productos
            de (Nombre), como las funciones que utilizan, las publicaciones que
            ven, las personas con las que interactúan, y más.
          </li>
          <li>
            Si se recolecta contenido o información de personas que interactúan
            con una página, grupo o evento, se debe avisar a los usuarios y
            obtener su consentimiento explícito.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Para proteger tu cuenta, se recomienda:
        </h2>
        <ul className="list-disc list-inside text-lg space-y-4">
          <li>No compartir la contraseña.</li>
          <li>
            No usar la misma contraseña en otros sitios web o aplicaciones.
          </li>
          <li>
            Definir y revisar con frecuencia la configuración de privacidad.
          </li>
          <li>
            Aceptar solicitudes de amistad solo de personas conocidas
            personalmente.
          </li>
          <li>Reportar lo que parezca sospechoso.</li>
        </ul>
      </div>
    </div>
  );
}
