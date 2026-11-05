# Plan de Implementación: Lenguajes del Mundo Vivo

## Fase 1: Configuración del Proyecto

### Tarea 1.1: Inicializar Proyecto Next.js
- [ ] Crear proyecto Next.js con TypeScript
- [ ] Configurar ESLint y Prettier
- [ ] Instalar Tailwind CSS
- [ ] Configurar estructura de carpetas

**Comandos**:
```bash
npx create-next-app@latest lenguaje-app --typescript --tailwind --app --no-src-dir
cd lenguaje-app
```

### Tarea 1.2: Configurar Tailwind Personalizado
- [ ] Editar `tailwind.config.js` con paleta personalizada
- [ ] Configurar modo oscuro (class)
- [ ] Añadir fuentes (Inter, Merriweather)
- [ ] Crear `globals.css` base

### Tarea 1.3: Configurar TypeScript Types
- [ ] Crear `types/index.ts` con interfaces
- [ ] Definir tipos: Caso, Fuente, AplicacionPractica, DataSet
- [ ] Exportar tipos

## Fase 2: Datos y Contenido

### Tarea 2.1: Crear Estructura JSON
- [ ] Crear carpeta `data/`
- [ ] Crear `casos.json` con schema completo
- [ ] Añadir metadatos

### Tarea 2.2: Investigar y Poblar Casos (6 mínimo)
- [ ] **Abejas melíferas**: danza del waggle, señales químicas
  - Fuente: von Frisch, K. (1967). The Dance Language and Orientation of Bees
- [ ] **Cachalotes**: codas vocales
  - Fuente: Rendell & Whitehead (2003). Vocal clans in sperm whales
- [ ] **Elefantes africanos**: infrasonidos
  - Fuente: Payne et al. (1986). Infrasonic calls of the Asian elephant
- [ ] **Monos vervet**: llamadas de alarma específicas
  - Fuente: Seyfarth et al. (1980). Monkey responses to three different alarm calls
- [ ] **Currucas carboneras**: variación dialectal
  - Fuente: McGregor & Krebs (1982). Song types in a population of great tits
- [ ] **Plantas - señales químicas**: VOCs ante herbívoros
  - Fuente: Dicke & Baldwin (2010). The evolutionary context for herbivore-induced plant volatiles

**NOTA**: Verificar cada fuente antes de incluir. Marcar como "requiere verificación" si no se puede confirmar.

### Tarea 2.3: Poblar Aplicaciones Prácticas
- [ ] Bloque: Conservación (ej. monitoreo acústico de ballenas)
- [ ] Bloque: Agricultura (ej. control biológico mediante señales)
- [ ] Bloque: Gestión forestal (ej. redes micorrícicas)
- [ ] Añadir fuentes para cada aplicación

### Tarea 2.4: Crear Lista de Fuentes
- [ ] Compilar todas las referencias en array `fuentes`
- [ ] Formato uniforme: autor, año, título, revista
- [ ] Añadir DOI/URL cuando esté disponible

## Fase 3: Componentes Base

### Tarea 3.1: Layout Components
- [ ] `components/layout/Header.tsx`
  - Navegación principal
  - Links a todas las secciones
  - Responsive con hamburger menu
- [ ] `components/layout/Footer.tsx`
  - Copyright, última actualización
- [ ] `components/ThemeToggle.tsx`
  - Botón sol/luna
  - Persistencia en localStorage

### Tarea 3.2: Hero Component
- [ ] `components/Hero.tsx`
  - Título principal
  - Subtítulo
  - CTA button
  - Diseño centrado y atractivo

### Tarea 3.3: Disclaimer Component
- [ ] `components/DisclaimerNote.tsx`
  - Nota sobre uso de "lenguaje" como metáfora
  - Destacado visualmente
  - Reutilizable

## Fase 4: Página de Inicio

### Tarea 4.1: Implementar Landing Page
- [ ] `app/page.tsx`
  - Importar Hero component
  - Añadir DisclaimerNote
  - Sección breve de intro
  - Link al comparador

## Fase 5: Comparador

### Tarea 5.1: Componente de Tabla (Desktop)
- [ ] `components/ComparadorTable.tsx`
  - Tabla HTML semántica
  - Sticky header
  - Zebra striping
  - Responsive (ocultar en mobile)

### Tarea 5.2: Componente de Cards (Mobile)
- [ ] `components/ComparadorCards.tsx`
  - Cards apiladas verticalmente
  - Todos los campos visibles
  - Mostrar solo en mobile/tablet

### Tarea 5.3: Página del Comparador
- [ ] `app/comparador/page.tsx`
  - Importar datos de JSON
  - Renderizar tabla/cards según viewport
  - Añadir filtros básicos (opcional)

## Fase 6: Casos Detallados

### Tarea 6.1: Componente CasoCard
- [ ] `components/CasoCard.tsx`
  - Estado colapsado/expandido
  - Transiciones suaves
  - Mostrar todos los campos
  - Referencias linkadas

### Tarea 6.2: Página de Casos
- [ ] `app/casos/page.tsx`
  - Importar datos
  - Renderizar grid de CasoCard
  - Agrupar por categoría (opcional)

## Fase 7: Relevancia

### Tarea 7.1: Componente RelevanciaBlock
- [ ] `components/RelevanciaBlock.tsx`
  - Props: título, descripción, ejemplos, área
  - Icono representativo
  - Layout card

### Tarea 7.2: Página Relevancia
- [ ] `app/relevancia/page.tsx`
  - Importar datos de aplicaciones
  - Grid de 3 columnas (desktop)
  - Stack en mobile

## Fase 8: Fuentes

### Tarea 8.1: Componente FuenteItem
- [ ] `components/FuenteItem.tsx`
  - Formato APA simplificado
  - Link si hay DOI/URL
  - Badge "requiere verificación" si aplica

### Tarea 8.2: Página Fuentes
- [ ] `app/fuentes/page.tsx`
  - Lista completa de referencias
  - Agrupadas por categoría (opcional)
  - Ordenadas alfabéticamente

## Fase 9: Estilos y Tema

### Tarea 9.1: Implementar Modo Oscuro
- [ ] Context/Provider para tema
- [ ] Toggle funcional
- [ ] Persistencia en localStorage
- [ ] Transiciones suaves entre modos

### Tarea 9.2: Refinamiento Visual
- [ ] Ajustar espaciados
- [ ] Hover effects
- [ ] Focus states
- [ ] Animaciones sutiles

## Fase 10: Accesibilidad

### Tarea 10.1: Auditoría HTML Semántico
- [ ] Verificar estructura de headings
- [ ] Usar tags semánticos correctos
- [ ] Skip links

### Tarea 10.2: ARIA y A11y
- [ ] Labels en elementos interactivos
- [ ] Alt text en imágenes
- [ ] Focus visible
- [ ] Navegación con teclado

### Tarea 10.3: Testing con Lighthouse
- [ ] Ejecutar audit
- [ ] Corregir issues
- [ ] Score > 90 en Accessibility

## Fase 11: Performance

### Tarea 11.1: Optimización de Imágenes
- [ ] Usar Next.js Image component
- [ ] Lazy loading
- [ ] Formatos modernos (WebP)

### Tarea 11.2: Optimización General
- [ ] Code splitting (automático Next.js)
- [ ] Preload de fuentes críticas
- [ ] Purge CSS en build

### Tarea 11.3: Testing con Lighthouse
- [ ] Performance > 90
- [ ] SEO > 90
- [ ] Best Practices > 90

## Fase 12: Documentación

### Tarea 12.1: README Completo
- [ ] Descripción del proyecto
- [ ] Tecnologías usadas
- [ ] Instalación local
  ```bash
  npm install
  npm run dev
  ```
- [ ] Despliegue en Vercel
  - Conectar repo GitHub
  - Auto-deploy en push
- [ ] Estructura del proyecto
- [ ] Cómo actualizar contenido (editar JSON)
- [ ] Licencia

### Tarea 12.2: Comentarios en Código
- [ ] JSDoc en componentes principales
- [ ] Explicar lógica compleja
- [ ] Types documentados

## Fase 13: Testing y QA

### Tarea 13.1: Testing Manual
- [ ] Navegación completa en desktop
- [ ] Navegación completa en mobile
- [ ] Cambio de tema funciona
- [ ] Links externos abren correctamente
- [ ] Expansión de cards funciona
- [ ] Responsive en diferentes tamaños

### Tarea 13.2: Cross-browser Testing
- [ ] Chrome (última versión)
- [ ] Firefox (última versión)
- [ ] Safari (si disponible)
- [ ] Edge (última versión)

### Tarea 13.3: Testing de Accesibilidad
- [ ] Navegación con Tab completa
- [ ] Screen reader (NVDA/JAWS si disponible)
- [ ] Contraste verificado

## Fase 14: Despliegue

### Tarea 14.1: Preparar para Producción
- [ ] Verificar `.gitignore`
- [ ] Limpiar console.logs
- [ ] Build local sin errores
  ```bash
  npm run build
  ```
- [ ] Test build local
  ```bash
  npm run start
  ```

### Tarea 14.2: Deploy a Vercel
- [ ] Crear cuenta Vercel (si no existe)
- [ ] Conectar repo GitHub/GitLab
- [ ] Configurar proyecto
- [ ] Deploy
- [ ] Verificar en producción

### Tarea 14.3: Post-deploy
- [ ] Verificar todas las páginas funcionan
- [ ] Lighthouse audit en producción
- [ ] Compartir URL

## Checklist Final

### Funcionalidad
- [ ] Todas las páginas cargan sin errores
- [ ] Navegación funciona correctamente
- [ ] Comparador muestra todos los datos
- [ ] Casos expandibles funcionan
- [ ] Fuentes son accesibles
- [ ] Tema oscuro/claro funciona

### Contenido
- [ ] 6+ casos incluidos con fuentes
- [ ] Disclaimer visible
- [ ] 3 bloques de relevancia
- [ ] Lista completa de fuentes
- [ ] Sin afirmaciones sin fuente

### Diseño
- [ ] Paleta de colores coherente
- [ ] Responsive en todos los tamaños
- [ ] Tipografía legible
- [ ] Contraste adecuado

### Técnico
- [ ] Sin errores en consola
- [ ] Build sin warnings
- [ ] Lighthouse scores > 90
- [ ] Accesibilidad WCAG AA

### Documentación
- [ ] README completo
- [ ] Instrucciones de despliegue claras
- [ ] Código comentado donde necesario

## Estimación de Tiempo
- Fase 1: 30 min
- Fase 2: 2-3 horas (investigación)
- Fase 3-8: 3-4 horas (componentes y páginas)
- Fase 9: 1 hora (estilos)
- Fase 10: 1 hora (accesibilidad)
- Fase 11: 30 min (performance)
- Fase 12: 1 hora (docs)
- Fase 13: 1 hora (testing)
- Fase 14: 30 min (deploy)

**Total estimado: 10-13 horas**
