# Requisitos del Proyecto: Lenguajes del Mundo Vivo

## Objetivo
Crear una aplicación web educativa que compare el estado de la investigación en comunicación animal, vegetal y fúngica, destacando la relevancia de entender estos sistemas de comunicación para conocer nuestro entorno.

## Requisitos Funcionales

### RF-1: Página de Inicio (Hero)
- Título principal: "Lenguajes del mundo vivo"
- Subtítulo explicativo sobre comunicación no humana (máx. 2 líneas)
- Botón de CTA que navegue al comparador
- Diseño atractivo y limpio

### RF-2: Comparador Interactivo
- Tabla o tarjetas comparativas con los siguientes campos:
  - Especie/Sistema
  - Tipo de señal (sonora, química, eléctrica, visual)
  - Función comunicativa conocida
  - Evidencia principal
  - Nivel de consenso (establecido / en debate / especulativo)
  - Fuente científica
- Visualización clara y fácil de comparar
- Responsive en todos los dispositivos

### RF-3: Casos de Estudio (mínimo 6)
1. Abejas melíferas (Apis mellifera)
2. Cachalotes (Physeter macrocephalus)
3. Elefantes africanos (Loxodonta africana)
4. Monos vervet (Chlorocebus pygerythrus)
5. Currucas carboneras (Parus major)
6. Plantas con señales químicas ante herbívoros
7. Redes de micelio fúngico

- Cada caso en tarjeta expandible
- Contenido estructurado con evidencia científica
- Referencias incluidas

### RF-4: Sección "Por qué importa"
Tres bloques temáticos:
1. Aplicaciones en conservación
2. Aplicaciones en agricultura
3. Aplicaciones en gestión forestal

- Lenguaje divulgativo claro
- Ejemplos prácticos
- Sin sensacionalismo

### RF-5: Sección de Fuentes
- Lista completa de referencias científicas
- Formato: Autor, Año, Revista/Publicación
- Solo fuentes verificables
- Marcado claro cuando algo "requiere verificación"

## Requisitos de Contenido

### RC-1: Rigor Científico
- Toda afirmación debe tener fuente
- Sin afirmaciones no verificadas
- Distinción clara entre:
  - Hallazgos replicados y establecidos
  - Observaciones preliminares
  - Hipótesis en debate

### RC-2: Claridad Conceptual
- Nota visible explicando que "lenguaje" es metáfora técnica
- Reconocimiento del debate científico abierto
- Terminología precisa pero accesible

### RC-3: Tono Editorial
- Divulgativo, no académico
- Sin sensacionalismo
- Evitar antropomorfización excesiva
- No usar frases como "los animales nos hablan" sin matices apropiados

## Requisitos de Diseño

### RD-1: Paleta de Colores
- Base: verdes y tonos tierra
- Modo claro y modo oscuro
- Contraste WCAG AA mínimo

### RD-2: Tipografía
- Fuentes legibles (system fonts o Google Fonts)
- Jerarquía clara (h1-h6)
- Tamaño de texto accesible (min 16px cuerpo)

### RD-3: Responsive
- Mobile-first
- Breakpoints: mobile (< 640px), tablet (640-1024px), desktop (> 1024px)
- Pruebas en diferentes dispositivos

### RD-4: Accesibilidad
- Contraste suficiente (WCAG AA)
- Textos alternativos en imágenes/iconos
- Navegación con teclado
- Estructura semántica HTML
- Etiquetas ARIA donde sea necesario

## Requisitos Técnicos

### RT-1: Stack Tecnológico
- Next.js 14+ con App Router
- TypeScript
- Tailwind CSS
- React 18+

### RT-2: Estructura de Datos
- Archivo JSON separado: `data/casos.json`
- Schema validado con TypeScript
- Fácil de mantener y actualizar

### RT-3: Componentes
- Componentes reutilizables
- Props con TypeScript
- Separación de lógica y presentación

### RT-4: Despliegue
- Preparado para Vercel
- Variables de entorno si es necesario
- README con instrucciones claras

### RT-5: Dependencias
- Mínimas y justificadas
- Sin bloat innecesario
- Preferencia por soluciones nativas cuando sea posible

## Requisitos de Documentación

### RDOC-1: README.md
- Descripción del proyecto
- Instrucciones de instalación local
- Pasos para desplegar en Vercel
- Estructura del proyecto
- Cómo actualizar contenido

### RDOC-2: Comentarios en Código
- Componentes documentados
- Funciones complejas explicadas
- Types/Interfaces documentados

## Criterios de Éxito
1. La aplicación carga en < 3 segundos
2. Score de Lighthouse > 90 en todas las categorías
3. Funciona en Chrome, Firefox, Safari, Edge (últimas versiones)
4. Navegación intuitiva sin instrucciones
5. Contenido científicamente preciso y citado
6. Diseño profesional y atractivo
7. 100% responsive
8. Cumple WCAG 2.1 nivel AA

## Fuera del Alcance (v1)
- Backend/Base de datos
- Sistema de comentarios
- Autenticación de usuarios
- Búsqueda avanzada
- Multiidioma (solo español)
- Animaciones complejas
