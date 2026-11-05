'use client';

import { useState } from 'react';
import { Caso, Fuente } from '@/types';

interface Props {
  caso: Caso;
  fuentes: Fuente[];
}

export default function CasoCard({ caso, fuentes }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getCasoFuentes = () => {
    return caso.fuentesIds.map(id => fuentes.find(f => f.id === id)).filter(Boolean) as Fuente[];
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

  const casoFuentes = getCasoFuentes();

  return (
    <div className="card-hover cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
      {/* Header - Siempre visible */}
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="font-serif text-2xl font-bold mb-1">{caso.nombre}</h3>
          <p className="text-sm italic text-[rgb(var(--text-secondary))] mb-3">
            {caso.nombreCientifico}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {caso.tipoSenal.map((tipo) => (
              <span
                key={tipo}
                className="px-2 py-1 bg-secondary/20 text-secondary rounded text-xs font-medium"
              >
                {tipo}
              </span>
            ))}
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConsensoColor(caso.nivelConsenso)}`}>
              {caso.nivelConsenso}
            </span>
          </div>
        </div>
        
        <button
          className="p-2 hover:bg-[rgb(var(--background))] rounded-lg transition-colors"
          aria-label={isExpanded ? 'Contraer' : 'Expandir'}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      {/* Contenido expandible */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t pt-4 space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-[rgb(var(--text-secondary))] mb-2">
              Función Comunicativa:
            </h4>
            <p className="text-sm leading-relaxed">{caso.funcionComunicativa}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-[rgb(var(--text-secondary))] mb-2">
              Evidencia Principal:
            </h4>
            <p className="text-sm leading-relaxed">{caso.evidenciaPrincipal}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm text-[rgb(var(--text-secondary))] mb-2">
              Descripción Detallada:
            </h4>
            <p className="text-sm leading-relaxed">{caso.descripcionDetallada}</p>
          </div>
          
          {caso.ejemplosConcretos.length > 0 && (
            <div>
              <h4 className="font-semibold text-sm text-[rgb(var(--text-secondary))] mb-2">
                Ejemplos Concretos:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {caso.ejemplosConcretos.map((ejemplo, idx) => (
                  <li key={idx} className="leading-relaxed">{ejemplo}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div>
            <h4 className="font-semibold text-sm text-[rgb(var(--text-secondary))] mb-2">
              Referencias:
            </h4>
            <ul className="space-y-2">
              {casoFuentes.map((fuente) => (
                <li key={fuente.id} className="text-sm">
                  <span className="font-medium">{fuente.autores}</span>
                  {' '}
                  <span className="text-[rgb(var(--text-secondary))]">
                    ({fuente.año}).
                  </span>
                  {' '}
                  <span className="italic">{fuente.titulo}.</span>
                  {' '}
                  <span className="text-[rgb(var(--text-secondary))]">
                    {fuente.revista}
                  </span>
                  {fuente.doi && (
                    <span className="text-xs ml-2 text-primary">
                      <a 
                        href={`https://doi.org/${fuente.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        DOI: {fuente.doi}
                      </a>
                    </span>
                  )}
                  {fuente.requiereVerificacion && (
                    <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                      ⚠️ Requiere verificación adicional
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
