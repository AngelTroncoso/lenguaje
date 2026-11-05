import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
            Lenguajes del Mundo Vivo
          </h1>
          
          <p className="text-xl md:text-2xl text-[rgb(var(--text-secondary))] mb-10 max-w-2xl mx-auto leading-relaxed">
            Una exploración del estado de la investigación sobre comunicación 
            en animales, plantas y hongos, y su relevancia para comprender nuestro entorno.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/comparador"
              className="btn-primary inline-flex items-center gap-2"
            >
              Explorar el comparador
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </Link>
            
            <Link 
              href="/casos"
              className="px-6 py-3 rounded-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Ver casos de estudio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
