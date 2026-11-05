export default function DisclaimerNote() {
  return (
    <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 my-8">
      <div className="flex items-start gap-3">
        <svg 
          className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <div>
          <h3 className="font-serif font-bold text-lg mb-2 text-accent">
            Nota sobre el uso del término &quot;lenguaje&quot;
          </h3>
          <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
            El término &quot;lenguaje&quot; se utiliza aquí como una <strong>metáfora técnica</strong> para 
            describir sistemas de comunicación en organismos no humanos. El debate científico sobre 
            qué constituye un verdadero lenguaje, cómo se diferencia de otros sistemas de comunicación, 
            y hasta qué punto estos sistemas son comparables al lenguaje humano <strong>sigue abierto</strong> en 
            la comunidad científica. La información presentada refleja el estado actual de la investigación 
            y las interpretaciones vigentes.
          </p>
        </div>
      </div>
    </div>
  );
}
