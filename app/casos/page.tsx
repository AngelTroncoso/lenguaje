import CasoCard from '@/components/CasoCard';
import DisclaimerNote from '@/components/DisclaimerNote';
import data from '@/data/casos.json';
import { DataSet } from '@/types';

export default function CasosPage() {
  const typedData = data as unknown as DataSet;
  
  const casosPorCategoria = {
    animales: typedData.casos.filter(c => c.categoria === 'animales'),
    plantas: typedData.casos.filter(c => c.categoria === 'plantas'),
    hongos: typedData.casos.filter(c => c.categoria === 'hongos'),
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6">
          Casos de Estudio
        </h1>
        
        <p className="text-lg text-[rgb(var(--text-secondary))] text-center mb-8 max-w-3xl mx-auto">
          Explora en detalle los sistemas de comunicación documentados en diferentes organismos. 
          Cada caso incluye evidencia científica y referencias verificables.
        </p>
        
        <DisclaimerNote />
        
        {/* Animales */}
        <section className="mt-12">
          <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              🦅
            </span>
            Animales
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {casosPorCategoria.animales.map((caso) => (
              <CasoCard key={caso.id} caso={caso} fuentes={typedData.fuentes} />
            ))}
          </div>
        </section>
        
        {/* Plantas */}
        <section className="mt-16">
          <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
              🌿
            </span>
            Plantas
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {casosPorCategoria.plantas.map((caso) => (
              <CasoCard key={caso.id} caso={caso} fuentes={typedData.fuentes} />
            ))}
          </div>
        </section>
        
        {/* Hongos */}
        <section className="mt-16">
          <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              🍄
            </span>
            Hongos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {casosPorCategoria.hongos.map((caso) => (
              <CasoCard key={caso.id} caso={caso} fuentes={typedData.fuentes} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
