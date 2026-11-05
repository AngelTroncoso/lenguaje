import { Caso, Fuente } from '@/types';

interface Props {
  casos: Caso[];
  fuentes: Fuente[];
}

export default function ComparadorTable({ casos, fuentes }: Props) {
  const getFuenteById = (id: string) => {
    return fuentes.find(f => f.id === id);
  };

  const getConsensoColor = (nivel: string) => {
    switch (nivel) {
      case 'establecido':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'en debate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'especulativo':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="w-full bg-[rgb(var(--surface))]">
        <thead className="sticky top-16 bg-primary text-white">
          <tr>
            <th className="px-4 py-3 text-left font-serif">Especie/Sistema</th>
            <th className="px-4 py-3 text-left font-serif">Tipo de Señal</th>
            <th className="px-4 py-3 text-left font-serif">Función Comunicativa</th>
            <th className="px-4 py-3 text-left font-serif">Evidencia Principal</th>
            <th className="px-4 py-3 text-left font-serif">Nivel de Consenso</th>
            <th className="px-4 py-3 text-left font-serif">Fuente</th>
          </tr>
        </thead>
        <tbody>
          {casos.map((caso, index) => {
            const fuentePrincipal = getFuenteById(caso.fuentesIds[0]);
            return (
              <tr 
                key={caso.id}
                className={`border-b last:border-b-0 hover:bg-[rgb(var(--background))] transition-colors ${
                  index % 2 === 0 ? 'bg-[rgb(var(--background))]/30' : ''
                }`}
              >
                <td className="px-4 py-4">
                  <div>
                    <div className="font-semibold">{caso.nombre}</div>
                    <div className="text-sm italic text-[rgb(var(--text-secondary))]">
                      {caso.nombreCientifico}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap gap-1">
                    {caso.tipoSenal.map((tipo) => (
                      <span
                        key={tipo}
                        className="px-2 py-1 bg-secondary/20 text-secondary rounded text-xs font-medium"
                      >
                        {tipo}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm max-w-xs">
                  {caso.funcionComunicativa}
                </td>
                <td className="px-4 py-4 text-sm max-w-md">
                  {caso.evidenciaPrincipal}
                </td>
                <td className="px-4 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConsensoColor(caso.nivelConsenso)}`}>
                    {caso.nivelConsenso}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm">
                  {fuentePrincipal ? (
                    <div>
                      <div className="font-medium">
                        {fuentePrincipal.autores.split(',')[0]} et al.
                      </div>
                      <div className="text-[rgb(var(--text-secondary))]">
                        ({fuentePrincipal.año})
                      </div>
                      {fuentePrincipal.requiereVerificacion && (
                        <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                          ⚠️ Requiere verificación
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-[rgb(var(--text-secondary))]">Sin fuente</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
