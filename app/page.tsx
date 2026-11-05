import Hero from '@/components/Hero';
import DisclaimerNote from '@/components/DisclaimerNote';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <div className="container mx-auto px-4 pb-16">
        <DisclaimerNote />
        
        <section className="mt-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8">
            ¿Por qué importa?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Conservación</h3>
              <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                El monitoreo acústico y la comprensión de sistemas comunicativos permite 
                evaluar poblaciones amenazadas de forma no invasiva.
              </p>
            </div>
            
            <div className="card-hover">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Agricultura</h3>
              <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                Las señales químicas entre plantas abren nuevas vías para el control 
                biológico de plagas sin pesticidas.
              </p>
            </div>
            
            <div className="card-hover">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Gestión Forestal</h3>
              <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                Comprender las redes micorrícicas cambia cómo gestionamos bosques 
                para mejorar resiliencia y regeneración.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/relevancia" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
              Explorar aplicaciones en detalle
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
        
        <section className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Explora los casos
          </h2>
          <p className="text-[rgb(var(--text-secondary))] text-lg mb-8 max-w-2xl mx-auto">
            Desde la danza de las abejas hasta las redes fúngicas subterráneas, 
            descubre cómo diferentes organismos intercambian información.
          </p>
          <Link href="/casos" className="btn-primary">
            Ver todos los casos
          </Link>
        </section>
      </div>
    </div>
  );
}
