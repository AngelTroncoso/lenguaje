# Lenguajes del Mundo Vivo

Aplicación web interactiva que compara el estado de la investigación en comunicación animal, vegetal y fúngica, y explica por qué entender estos lenguajes es relevante para conocer nuestro entorno.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## 🌟 Características

- **Comparador interactivo**: Tabla comparativa (desktop) y tarjetas (mobile) de sistemas comunicativos
- **7 casos de estudio**: Abejas, cachalotes, elefantes, monos vervet, currucas, plantas y hongos
- **Rigor científico**: Todas las afirmaciones respaldadas por investigación revisada por pares
- **Modo oscuro**: Tema claro y oscuro con persistencia en localStorage
- **100% responsive**: Diseño mobile-first que funciona en todos los dispositivos
- **Accesible**: Navegación por teclado, contraste WCAG AA, HTML semántico
- **Datos estructurados**: JSON separado para fácil actualización de contenido

## 📋 Tecnologías

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS con paleta personalizada de verdes y tierra
- **Fuentes**: Inter (sans-serif), Merriweather (serif) via Google Fonts
- **Deploy**: Preparado para Vercel

## 🚀 Instalación Local

### Prerrequisitos

- Node.js 18+ y npm (o yarn/pnpm)

### Pasos

1. **Clonar el repositorio** (o descargar los archivos)

```bash
git clone <tu-repositorio>
cd lenguaje-app
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

Navega a [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run start    # Inicia servidor de producción
npm run lint     # Ejecuta ESLint
```

## 🌐 Despliegue en Vercel

### Opción 1: Deploy desde la interfaz de Vercel

1. Sube tu proyecto a GitHub/GitLab/Bitbucket
2. Ve a [vercel.com](https://vercel.com) e inicia sesión
3. Click en **"Add New Project"**
4. Importa tu repositorio
5. Vercel detectará automáticamente Next.js
6. Click en **"Deploy"**

### Opción 2: Deploy desde la terminal

1. Instala Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
cd lenguaje-app
vercel
```

3. Sigue las instrucciones en pantalla

### Configuración en Vercel

- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Framework Preset**: Next.js

No se requieren variables de entorno para esta versión.

## 📂 Estructura del Proyecto

```
lenguaje-app/
├── app/                      # App Router de Next.js
│   ├── layout.tsx           # Layout raíz con Header/Footer
│   ├── page.tsx             # Página de inicio (Hero)
│   ├── globals.css          # Estilos globales
│   ├── comparador/
│   │   └── page.tsx         # Tabla/Cards comparativas
│   ├── casos/
│   │   └── page.tsx         # Casos expandibles
│   ├── relevancia/
│   │   └── page.tsx         # Aplicaciones prácticas
│   └── fuentes/
│       └── page.tsx         # Referencias bibliográficas
├── components/               # Componentes reutilizables
│   ├── layout/
│   │   ├── Header.tsx       # Navegación
│   │   └── Footer.tsx       # Pie de página
│   ├── Hero.tsx
│   ├── DisclaimerNote.tsx
│   ├── ComparadorTable.tsx
│   ├── ComparadorCards.tsx
│   ├── CasoCard.tsx
│   ├── RelevanciaBlock.tsx
│   ├── FuenteItem.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── data/
│   └── casos.json           # Datos de casos, fuentes y aplicaciones
├── types/
│   └── index.ts             # Definiciones TypeScript
├── public/                  # Assets estáticos
├── tailwind.config.ts       # Configuración de Tailwind
├── tsconfig.json            # Configuración TypeScript
├── next.config.ts           # Configuración Next.js
└── package.json
```

## 🔧 Cómo Actualizar el Contenido

Todo el contenido está centralizado en `data/casos.json`. Para añadir o editar:

### Añadir un nuevo caso:

1. Abre `data/casos.json`
2. Añade un nuevo objeto al array `casos`:

```json
{
  "id": "nuevo-caso",
  "nombre": "Nombre común",
  "nombreCientifico": "Nombre científico",
  "categoria": "animales",
  "tipoSenal": ["sonora"],
  "funcionComunicativa": "Descripción breve",
  "evidenciaPrincipal": "Evidencia principal",
  "nivelConsenso": "establecido",
  "descripcionDetallada": "Descripción completa",
  "ejemplosConcretos": ["Ejemplo 1", "Ejemplo 2"],
  "fuentesIds": ["id_fuente_1"]
}
```

3. Añade las fuentes correspondientes al array `fuentes`
4. Guarda y rebuild (`npm run build`)

### Añadir una fuente:

```json
{
  "id": "autor2024",
  "autores": "Autor, A. & Co-autor, B.",
  "año": 2024,
  "titulo": "Título del artículo",
  "revista": "Nombre de la revista",
  "doi": "10.xxxx/xxxxx",
  "requiereVerificacion": false
}
```

### Añadir una aplicación práctica:

```json
{
  "id": "nueva-app",
  "titulo": "Título de la aplicación",
  "area": "conservación",
  "descripcion": "Descripción de la aplicación",
  "ejemplos": ["Ejemplo 1", "Ejemplo 2"],
  "fuentesIds": ["fuente1", "fuente2"]
}
```

## 🎨 Personalización del Diseño

### Cambiar la paleta de colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    light: '#7FB069',    // Verde claro (modo oscuro)
    DEFAULT: '#2D5016',  // Verde oscuro (modo claro)
    dark: '#1A3009',     // Verde muy oscuro
  },
  // ... otros colores
}
```

### Cambiar las fuentes

Edita `app/layout.tsx`:

```typescript
const inter = Inter({ 
  subsets: ["latin"],
  // ... config
});
```

## ✅ Checklist de Calidad

- ✅ Todas las páginas cargan sin errores
- ✅ Navegación funciona correctamente
- ✅ Comparador responsive (tabla/cards)
- ✅ Casos expandibles funcionan
- ✅ Tema oscuro/claro funciona
- ✅ 6+ casos con fuentes verificadas
- ✅ Disclaimer visible
- ✅ Sin afirmaciones sin fuente
- ✅ Contraste WCAG AA cumplido
- ✅ Navegación por teclado funcional

## 🧪 Testing

### Testing manual

1. Navega por todas las páginas
2. Prueba el comparador en mobile y desktop
3. Expande y contrae tarjetas de casos
4. Cambia entre modo claro y oscuro
5. Verifica links externos (DOIs)
6. Navega con Tab (teclado)

### Lighthouse

```bash
npm run build
npm run start
```

Abre Chrome DevTools > Lighthouse y ejecuta audit en:
- Performance
- Accessibility
- Best Practices
- SEO

Objetivo: Score > 90 en todas las categorías.

## 📝 Notas Importantes

### Rigor Científico

- ❌ **No inventes citas**: Solo incluye referencias que puedas verificar
- ✅ **Marca lo incierto**: Usa `requiereVerificacion: true` si no estás seguro
- ✅ **Distingue niveles de consenso**: `establecido` / `en debate` / `especulativo`
- ✅ **Sin sensacionalismo**: Tono divulgativo pero preciso

### Accesibilidad

- Contraste mínimo 4.5:1 para texto normal
- Todas las imágenes/iconos tienen alt text
- Navegación completa por teclado
- Focus visible en elementos interactivos
- HTML semántico (`<header>`, `<nav>`, `<main>`, `<section>`)

## 🐛 Problemas Comunes

### El build falla

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Los estilos no se aplican

Verifica que `tailwind.config.ts` incluya todas las rutas:

```typescript
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
]
```

### El modo oscuro no persiste

Comprueba que el navegador permita localStorage (no está en modo incógnito estricto).

## 📚 Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Guías de accesibilidad WCAG](https://www.w3.org/WAI/WCAG21/quickref/)
- [Vercel Deployment Docs](https://vercel.com/docs)

## 📄 Licencia

Este proyecto está desarrollado con fines educativos y de divulgación científica.

## 👥 Contribuir

Para contribuir con nuevos casos o corregir información:

1. Verifica las fuentes científicas
2. Actualiza `data/casos.json`
3. Asegúrate de que todas las referencias sean completas
4. Marca con `requiereVerificacion: true` si no estás 100% seguro
5. Haz un pull request con descripción detallada

---

**Última actualización**: Noviembre 2026 • **Versión**: 1.0.0
