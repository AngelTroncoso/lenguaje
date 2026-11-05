import { AplicacionPractica, Fuente } from '@/types';

interface Props {
  aplicacion: AplicacionPractica;
  fuentes: Fuente[];
}

export default function RelevanciaBlock({ aplicacion, fuentes }: Props) {
  const getAreaIcon = (area: string) => {
    switch (area) {
      case 'conservación':
        return (
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'agricultura':
        return (
          <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case 'gestión forestal':
        return (
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getAreaColor = (area: string) => {
    switch (area) {
      case 'conservación':
        return 'primary';
      case 'agricultura':
        return 'secondary';
      case 'gestión forestal':
        return 'accent';
      default:
        return 'primary';
    }
  };

  const areaColor = getAreaColor(aplicacion.area);
  const areaFuentes = aplicacion.fuentesIds.map(id => fuentes.find(f => f.id === id)).filter(Boolean) as Fuente[];

  return (
    <div className="card h-full flex flex-col">
      <div className={`w-14 h-14 bg-${areaColor}/10 rounded-lg flex items-center justify-center mb-4`}>
        {getAreaIcon(aplicacion.area)}
      </div>
      
      <h2 className="text-2xl font-serif font-bold mb-3">
        {aplicacion.titulo}
      </h2>
      
      <div className={`inline-block px-3 py-1 bg-${areaColor}/10 text-${areaColor} rounded-full text-xs font-medium mb-4`}>
        {aplicacion.area}
      </div>
      
      <p className="text-[rgb(var(--text-secondary))] leading-relaxed mb-6 flex-1">
        {aplicacion.descripcion}
      </p>
      
      <div className="mb-6">
        <h3 className="font-semibold text-sm text-[rgb(var(--text-secondary))] mb-3">
          Ejemplos de aplicación:
        </h3>
        <ul className="space-y-2">
          {aplicacion.ejemplos.map((ejemplo, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <span className={`text-${areaColor} mt-1 flex-shrink-0`}>▸</span>
              <span className="leading-relaxed">{ejemplo}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {areaFuentes.length > 0 && (
        <div className="border-t pt-4">
          <h3 className="font-semibold text-xs text-[rgb(var(--text-secondary))] mb-2">
            Referencias:
          </h3>
          <ul className="space-y-1">
            {areaFuentes.map((fuente) => (
              <li key={fuente.id} className="text-xs text-[rgb(var(--text-secondary))]">
                {fuente.autores.split(',')[0]} et al. ({fuente.año})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
