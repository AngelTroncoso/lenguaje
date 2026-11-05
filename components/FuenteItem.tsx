import { Fuente } from '@/types';

interface Props {
  fuente: Fuente;
}

export default function FuenteItem({ fuente }: Props) {
  return (
    <div className="card">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <p className="text-sm leading-relaxed">
            <span className="font-semibold">{fuente.autores}</span>
            {' '}
            <span className="text-[rgb(var(--text-secondary))]">({fuente.año}).</span>
            {' '}
            <span className="italic">{fuente.titulo}.</span>
            {' '}
            <span className="text-[rgb(var(--text-secondary))]">{fuente.revista}.</span>
          </p>
          
          {fuente.doi && (
            <a
              href={`https://doi.org/${fuente.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:text-primary-dark hover:underline mt-2 inline-block"
            >
              DOI: {fuente.doi} →
            </a>
          )}
          
          {fuente.url && !fuente.doi && (
            <a
              href={fuente.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:text-primary-dark hover:underline mt-2 inline-block"
            >
              Ver enlace →
            </a>
          )}
        </div>
        
        {fuente.requiereVerificacion && (
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs font-medium rounded">
              ⚠️ Verificar
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
