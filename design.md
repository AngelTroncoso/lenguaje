# Diseño Técnico: Lenguajes del Mundo Vivo

## Arquitectura General

### Estructura de Páginas (App Router)
```
app/
├── layout.tsx           # Layout principal, tema, fuentes
├── page.tsx             # Hero/Landing page
├── comparador/
│   └── page.tsx         # Página del comparador
├── casos/
│   └── page.tsx         # Página de casos detallados
├── relevancia/
│   └── page.tsx         # "Por qué importa"
└── fuentes/
    └── page.tsx         # Referencias bibliográficas
```

### Componentes
```
components/
├── layout/
│   ├── Header.tsx       # Navegación principal
│   └── Footer.tsx       # Footer con info adicional
├── Hero.tsx             # Sección hero de landing
├── ComparadorTable.tsx  # Tabla comparativa (desktop)
├── ComparadorCards.tsx  # Tarjetas comparativas (mobile)
├── CasoCard.tsx         # Tarjeta expandible por caso
├── RelevanciaBlock.tsx  # Bloque de aplicación práctica
├── FuenteItem.tsx       # Item de referencia bibliográfica
├── ThemeToggle.tsx      # Botón cambio de tema
└── DisclaimerNote.tsx   # Nota sobre uso de "lenguaje"
```

## Modelo de Datos

### Schema TypeScript

```typescript
// types/index.ts

export type TipoSenal = 'sonora' | 'química' | 'eléctrica' | 'visual' | 'mixta';
export type NivelConsenso = 'establecido' | 'en debate' | 'especulativo';
export type CategoriaCaso = 'animales' | 'plantas' | 'hongos';

export interface Fuente {
  id: string;
  autores: string;
  año: number;
  titulo: string;
  revista: string;
  doi?: string;
  url?: string;
  requiereVerificacion?: boolean;
}

export interface Caso {
  id: string;
  nombre: string;
  nombreCientifico: string;
  categoria: CategoriaCaso;
  tipoSenal: TipoSenal[];
  funcionComunicativa: string;
  evidenciaPrincipal: string;
  nivelConsenso: NivelConsenso;
  descripcionDetallada: string;
  ejemplosConcretos: string[];
  fuentesIds: string[];
  imagen?: string;
  imageAlt?: string;
}

export interface AplicacionPractica {
  id: string;
  titulo: string;
  area: 'conservación' | 'agricultura' | 'gestión forestal';
  descripcion: string;
  ejemplos: string[];
  fuentesIds: string[];
}

export interface DataSet {
  casos: Caso[];
  fuentes: Fuente[];
  aplicaciones: AplicacionPractica[];
  metadatos: {
    version: string;
    ultimaActualizacion: string;
    notaMetodologica: string;
  };
}
```

### Estructura JSON (data/casos.json)

```json
{
  "metadatos": {
    "version": "1.0.0",
    "ultimaActualizacion": "2024-11-05",
    "notaMetodologica": "Todos los casos incluidos están basados en investigación publicada en revistas revisadas por pares. El nivel de consenso refleja el estado actual del debate científico."
  },
  "casos": [ /* array de casos */ ],
  "fuentes": [ /* array de fuentes */ ],
  "aplicaciones": [ /* array de aplicaciones */ ]
}
```

## Diseño Visual

### Paleta de Colores

#### Modo Claro
- **Primary**: `#2D5016` (verde oscuro/bosque)
- **Secondary**: `#6B8E23` (verde oliva)
- **Accent**: `#8B4513` (tierra/marrón)
- **Background**: `#FDFBF7` (crema claro)
- **Surface**: `#FFFFFF`
- **Text Primary**: `#1A1A1A`
- **Text Secondary**: `#4A4A4A`
- **Border**: `#D4C5B9`

#### Modo Oscuro
- **Primary**: `#7FB069` (verde claro)
- **Secondary**: `#A8C686` (verde lima suave)
- **Accent**: `#D4A574` (arena)
- **Background**: `#1A1A1A`
- **Surface**: `#2A2A2A`
- **Text Primary**: `#E8E8E8`
- **Text Secondary**: `#B0B0B0`
- **Border**: `#3A3A3A`

### Configuración Tailwind

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7FB069',
          DEFAULT: '#2D5016',
          dark: '#1A3009',
        },
        secondary: {
          light: '#A8C686',
          DEFAULT: '#6B8E23',
          dark: '#4A6318',
        },
        accent: {
          light: '#D4A574',
          DEFAULT: '#8B4513',
          dark: '#5C2D0A',
        },
        background: {
          light: '#FDFBF7',
          dark: '#1A1A1A',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#2A2A2A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      }
    }
  }
}
```

### Tipografía
- **Títulos**: Merriweather (serif) - peso 700
- **Cuerpo**: Inter (sans-serif) - peso 400, 500
- **Código/Científico**: Inter - peso 500

### Componentes UI

#### Hero Section
- Full viewport height (100vh)
- Título centrado, grande (text-5xl md:text-7xl)
- Subtítulo en texto secundario
- CTA button destacado con hover effects
- Gradiente sutil de fondo

#### Comparador
**Desktop (>1024px)**: Tabla HTML con columnas fijas
- Sticky header
- Zebra striping
- Hover effects en filas

**Mobile/Tablet (<1024px)**: Cards apiladas
- Una card por caso
- Campos en formato vertical
- Swipe horizontal si hay overflow

#### Tarjetas de Caso (Expandibles)
- Estado colapsado: nombre, tipo señal, nivel consenso
- Estado expandido: toda la información
- Transición suave (300ms)
- Icono indicador (chevron)

#### Bloques de Relevancia
- Grid de 3 columnas en desktop
- Stacked en mobile
- Icono representativo por área
- Padding generoso

## Navegación

### Header
- Logo/Título (link a home)
- Links: Inicio | Comparador | Casos | Relevancia | Fuentes
- Theme toggle (sol/luna)
- Sticky en scroll
- Hamburger menu en mobile

### Footer
- Copyright
- Link a GitHub (opcional)
- Última actualización
- Disclaimer breve

## Interacciones

### Animaciones
- Page transitions: fade-in suave
- Card expand/collapse: height transition
- Hover effects: scale 1.02, shadow
- Theme toggle: smooth color transitions

### Estados
- Loading: skeleton screens
- Error: mensaje amigable
- Empty: mensaje explicativo
- Success: contenido normal

## Accesibilidad

### Implementación
1. **HTML Semántico**: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
2. **Headings**: jerarquía correcta (h1 → h2 → h3)
3. **ARIA Labels**: en botones de iconos, expansibles
4. **Focus Visible**: outline claro en navegación por teclado
5. **Skip Links**: "Saltar al contenido principal"
6. **Alt Text**: descripciones significativas de imágenes
7. **Color Contrast**: mínimo 4.5:1 para texto normal, 3:1 para texto grande
8. **Responsive Text**: rem units, escalable

### Testing Checklist
- [ ] Navegación completa con teclado (Tab, Enter, Escape)
- [ ] Screen reader (NVDA/JAWS) lee correctamente
- [ ] Contraste verificado con Lighthouse/axe
- [ ] Formularios con labels asociados
- [ ] Focus trap en modales (si aplica)

## Performance

### Optimizaciones
1. **Imágenes**: Next.js Image component con lazy loading
2. **Fonts**: preload de fuentes críticas
3. **CSS**: Tailwind purge en producción
4. **JS**: code splitting automático de Next.js
5. **Data**: JSON estático (no API calls en v1)

### Métricas Objetivo
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTI** (Time to Interactive): < 3.5s

## SEO

### Meta Tags
```tsx
// app/layout.tsx
export const metadata = {
  title: 'Lenguajes del Mundo Vivo | Comunicación en Animales, Plantas y Hongos',
  description: 'Explora el estado de la investigación en comunicación animal, vegetal y fúngica. Comparador interactivo con evidencia científica.',
  keywords: 'comunicación animal, bioacústica, señales químicas, redes de micelio, etología',
  authors: [{ name: 'Tu Nombre' }],
  openGraph: {
    title: 'Lenguajes del Mundo Vivo',
    description: 'Comunicación no humana: estado de la investigación',
    type: 'website',
  }
}
```

## Despliegue en Vercel

### Configuración
1. **Build Command**: `npm run build`
2. **Output Directory**: `.next`
3. **Install Command**: `npm install`
4. **Framework Preset**: Next.js

### Variables de Entorno (si necesarias)
- Ninguna en v1 (todo estático)

### Optimizaciones Vercel
- Edge Network automático
- Image Optimization habilitado
- Analytics opcional

## Estructura de Archivos Final

```
lenguaje/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── comparador/page.tsx
│   ├── casos/page.tsx
│   ├── relevancia/page.tsx
│   └── fuentes/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── Hero.tsx
│   ├── ComparadorTable.tsx
│   ├── ComparadorCards.tsx
│   ├── CasoCard.tsx
│   ├── RelevanciaBlock.tsx
│   ├── FuenteItem.tsx
│   ├── ThemeToggle.tsx
│   └── DisclaimerNote.tsx
├── data/
│   └── casos.json
├── types/
│   └── index.ts
├── lib/
│   └── utils.ts
├── public/
│   └── (imágenes si las hay)
├── styles/
│   └── globals.css
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Consideraciones de Mantenimiento

### Actualización de Contenido
1. Editar `data/casos.json`
2. Validar JSON
3. Rebuild (automático en Vercel)
4. Deploy

### Añadir Nuevo Caso
1. Crear entrada en array `casos`
2. Añadir fuentes en array `fuentes`
3. Referenciar IDs correctamente
4. Verificar información científica

### Testing
- **Unit Tests**: Vitest (opcional para v1)
- **E2E Tests**: Playwright (opcional para v1)
- **Manual Testing**: checklist de dispositivos y browsers
