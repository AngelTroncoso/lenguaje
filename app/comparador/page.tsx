import ComparadorTable from '@/components/ComparadorTable';
import ComparadorCards from '@/components/ComparadorCards';
import DisclaimerNote from '@/components/DisclaimerNote';
import data from '@/data/casos.json';

export default function ComparadorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6">
          Comparador de Sistemas Comunicativos
        </h1>
        
        <p className="text-lg text-[rgb(var(--text-secondary))] text-center mb-8 max-w-3xl mx-auto">
          Compara las características de comunicación en diferentes especies y sistemas biológicos, 
          basado en evidencia científica publicada.
        </p>
        
        <DisclaimerNote />
        
        {/* Tabla para desktop */}
        <div className="hidden lg:block mt-12">
          <ComparadorTable casos={data.casos} fuentes={data.fuentes} />
        </div>
        
        {/* Tarjetas para mobile/tablet */}
        <div className="lg:hidden mt-12">
          <ComparadorCards casos={data.casos} fuentes={data.fuentes} />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-[rgb(var(--text-secondary))] mb-4">
            Última actualización: {data.metadatos.ultimaActualizacion}
          </p>
          <p className="text-sm text-[rgb(var(--text-secondary))] italic">
            {data.metadatos.notaMetodologica}
          </p>
        </div>
      </div>
    </div>
  );
}
