import ComparadorTable from '@/components/ComparadorTable';
import ComparadorCards from '@/components/ComparadorCards';
import DisclaimerNote from '@/components/DisclaimerNote';
import data from '@/data/casos.json';
import { DataSet } from '@/types';

export default function ComparadorPage() {
  const typedData = data as unknown as DataSet;
  
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
          <ComparadorTable casos={typedData.casos} fuentes={typedData.fuentes} />
        </div>
        
        {/* Tarjetas para mobile/tablet */}
        <div className="lg:hidden mt-12">
          <ComparadorCards casos={typedData.casos} fuentes={typedData.fuentes} />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-[rgb(var(--text-secondary))] mb-4">
            Última actualización: {typedData.metadatos.ultimaActualizacion}
          </p>
          <p className="text-sm text-[rgb(var(--text-secondary))] italic">
            {typedData.metadatos.notaMetodologica}
          </p>
        </div>
      </div>
    </div>
  );
}
