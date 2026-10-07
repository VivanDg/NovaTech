function SecurityPanel() {
  return (
    <div className="lg:col-span-5 flex flex-col justify-between bg-gray-100 p-8">

      <div>

        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 bg-teal-700 text-white text-xs font-bold">
            CONSTRUSOFT // TICKET v4.2
          </span>

          <span className="px-3 py-1 bg-gray-200 text-xs">
            BIM Level 3
          </span>
        </div>

        <h1 className="text-4xl font-bold">
          Control de Obra &
          <br />

          <span className="text-teal-700">
            Gestión de Tickets
          </span>
        </h1>

        <p className="mt-4 text-gray-600">
          Infraestructura técnica para supervisión estructural,
          trazabilidad de incidencias en obra y despacho de
          resoluciones.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="bg-white p-4">
          <strong>Trazabilidad BIM</strong>
          <p className="text-sm text-gray-600 mt-2">
            Modelado IFC4 y georreferenciación de patologías.
          </p>
        </div>

        <div className="bg-white p-4">
          <strong>SLA 99.98%</strong>
          <p className="text-sm text-gray-600 mt-2">
            Respuesta a incidentes críticos.
          </p>
        </div>

        <div className="bg-white p-4">
          <strong>Clean Arch</strong>
          <p className="text-sm text-gray-600 mt-2">
            Desacoplamiento de dominio e infraestructura.
          </p>
        </div>

        <div className="bg-white p-4">
          <strong>Seguridad</strong>
          <p className="text-sm text-gray-600 mt-2">
            Protección y control de acceso.
          </p>
        </div>

      </div>

    </div>
  );
}

export default SecurityPanel;