import RelevanciaBlock from '@/components/RelevanciaBlock';
import data from '@/data/casos.json';

export default function RelevanciaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6">
          ¿Por Qué Importa?
        </h1>
        
        <p className="text-lg text-[rgb(var(--text-secondary))] text-center mb-12 max-w-3xl mx-auto">
          Comprender los sistemas de comunicación en organismos no humanos tiene aplicaciones 
          prácticas en conservación, agricultura y gestión de ecosistemas. Estas son algunas 
          áreas donde este conocimiento marca la diferencia.
        </p>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {data.aplicaciones.map((app) => (
            <RelevanciaBlock key={app.id} aplicacion={app} fuentes={data.fuentes} />
          ))}
        </div>
        
        <div className="mt-16 card bg-primary/5">
          <h2 className="text-2xl font-serif font-bold mb-4">
            Perspectiva Integrada
          </h2>
          <p className="text-[rgb(var(--text-secondary))] leading-relaxed mb-4">
            El estudio de la comunicación en animales, plantas y hongos está transformando 
            nuestra comprensión de los ecosistemas como redes interconectadas de información. 
            Este conocimiento no solo es fascinante desde el punto de vista científico, sino 
            que también informa prácticas más sostenibles en múltiples sectores.
          </p>
          <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
            Desde el monitoreo acústico pasivo que permite rastrear especies amenazadas sin 
            perturbarlas, hasta el aprovechamiento de señales químicas para reducir el uso 
            de pesticidas, estas aplicaciones demuestran que entender cómo se comunican otros 
            organismos es esencial para cuidar mejor nuestro entorno compartido.
          </p>
        </div>
      </div>
    </div>
  );
}
