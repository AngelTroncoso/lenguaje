export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--surface))] border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[rgb(var(--text-secondary))] text-sm">
            <p>&copy; 2026 Lenguajes del Mundo Vivo</p>
            <p className="mt-1">Contenido basado en investigación científica revisada por pares</p>
          </div>
          
          <div className="text-[rgb(var(--text-secondary))] text-sm text-center md:text-right">
            <p>Última actualización: Noviembre 2026</p>
            <p className="mt-1">
              El término &quot;lenguaje&quot; se usa como metáfora técnica
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
