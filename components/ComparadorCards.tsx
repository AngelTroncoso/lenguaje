import { Caso, Fuente } from '@/types';

interface Props {
  casos: Caso[];
  fuentes: Fuente[];
}

export default function ComparadorCards({ casos, fuentes }: Props) {
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
    <div className="space-y-6">
      {casos.map((caso) => {
        const fuentePrincipal = getFuenteById(caso.fuentesIds[0]);
        return (
          <div key={caso.id} className="card">
            <div className="mb-4">
              <h3 className="font-serif text-xl font-bold">{caso.nombre}</h3>
              <p className="text-sm italic text-[rgb(var(--text-secondary))]">
                {caso.nombreCientifico}
              </p>
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-sm font-semibold text-[rgb(var(--text-secondary))]">
                  Tipo de señal:
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {caso.tipoSenal.map((tipo) => (
                    <span
                      key={tipo}
                      className="px-2 py-1 bg-secondary/20 text-secondary rounded text-xs font-medium"
                    >
                      {tipo}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-sm font-semibold text-[rgb(var(--text-secondary))]">
                  Función comunicativa:
                </span>
                <p className="text-sm mt-1">{caso.funcionComunicativa}</p>
              </div>
              
              <div>
                <span className="text-sm font-semibold text-[rgb(var(--text-secondary))]">
                  Evidencia principal:
                </span>
                <p className="text-sm mt-1">{caso.evidenciaPrincipal}</p>
              </div>
              
              <div>
                <span className="text-sm font-semibold text-[rgb(var(--text-secondary))]">
                  Nivel de consenso:
                </span>
                <div className="mt-1">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConsensoColor(caso.nivelConsenso)}`}>
                    {caso.nivelConsenso}
                  </span>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-semibold text-[rgb(var(--text-secondary))]">
                  Fuente:
                </span>
                {fuentePrincipal ? (
                  <div className="mt-1 text-sm">
                    <span className="font-medium">
                      {fuentePrincipal.autores.split(',')[0]} et al.
                    </span>
                    {' '}
                    <span className="text-[rgb(var(--text-secondary))]">
                      ({fuentePrincipal.año})
                    </span>
                    {fuentePrincipal.requiereVerificacion && (
                      <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                        ⚠️ Requiere verificación
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-[rgb(var(--text-secondary))] mt-1">Sin fuente</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
