import FuenteItem from '@/components/FuenteItem';
import data from '@/data/casos.json';
import { DataSet } from '@/types';

export default function FuentesPage() {
  const typedData = data as unknown as DataSet;
  
  // Ordenar fuentes alfabéticamente por autor
  const fuentesOrdenadas = [...typedData.fuentes].sort((a, b) => {
    const autorA = a.autores.toLowerCase();
    const autorB = b.autores.toLowerCase();
    return autorA.localeCompare(autorB);
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6">
          Referencias Bibliográficas
        </h1>
        
        <p className="text-lg text-[rgb(var(--text-secondary))] text-center mb-8">
          Todas las afirmaciones en esta aplicación están respaldadas por investigación científica 
          publicada en revistas revisadas por pares.
        </p>
        
        <div className="card mb-8">
          <h2 className="font-serif text-xl font-bold mb-3">Nota Metodológica</h2>
          <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed mb-3">
            {typedData.metadatos.notaMetodologica}
          </p>
          <p className="text-xs text-[rgb(var(--text-secondary))] italic">
            Última actualización: {typedData.metadatos.ultimaActualizacion} • Versión: {typedData.metadatos.version}
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold mb-4">
            Fuentes ({fuentesOrdenadas.length})
          </h2>
          
          {fuentesOrdenadas.map((fuente) => (
            <FuenteItem key={fuente.id} fuente={fuente} />
          ))}
        </div>
        
        <div className="mt-12 card bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
          <h3 className="font-serif text-lg font-bold mb-2 text-yellow-900 dark:text-yellow-200">
            Referencias que requieren verificación
          </h3>
          <p className="text-sm text-yellow-800 dark:text-yellow-300 leading-relaxed">
            Las referencias marcadas con ⚠️ indican que la fuente no ha podido ser completamente 
            verificada al momento de la publicación. Estas entradas requieren confirmación adicional 
            antes de ser citadas en contextos académicos.
          </p>
        </div>
      </div>
    </div>
  );
}
