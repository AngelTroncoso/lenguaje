# 🚀 Guía de Deploy Manual en Vercel

## ⚠️ Si el auto-deploy no funciona

Si Vercel no está detectando tus commits automáticamente, sigue estos pasos:

### Método 1: Redeploy desde el Dashboard

1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto "lenguaje"
3. Click en la pestaña "Deployments"
4. Click en el último deployment
5. Click en los 3 puntos (...) en la esquina superior derecha
6. Click en **"Redeploy"**
7. **IMPORTANTE**: DESMARCA "Use existing build cache"
8. Click en "Redeploy"

### Método 2: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI (solo una vez)
npm install -g vercel

# Navegar al proyecto
cd "c:\Users\angel\OneDrive\Escritorio\lenguaje\lenguaje-app"

# Deploy a producción
vercel --prod
```

Sigue las instrucciones en pantalla:
- Login con tu cuenta
- Confirma el proyecto
- Confirma el deploy

### Método 3: Verificar Configuración de Git

1. Ve a tu proyecto en Vercel
2. Settings → Git
3. Verifica que:
   - Repository: `AngelTroncoso/lenguaje`
   - Branch: `main`
   - Root Directory: `./` (raíz)
4. Si algo está mal, desconecta y reconecta el repositorio

### Método 4: Forzar Webhook

Si el webhook no está funcionando:

1. Ve a tu repositorio en GitHub
2. Settings → Webhooks
3. Busca el webhook de Vercel
4. Click en "Edit"
5. Scroll hasta abajo y click en "Redeliver" en un evento reciente
6. O elimina el webhook y deja que Vercel lo recree

## 🔍 Verificar que tienes los commits correctos

```bash
cd "c:\Users\angel\OneDrive\Escritorio\lenguaje\lenguaje-app"
git log --oneline -5
```

Deberías ver algo como:
```
5be32c1 fix: Configurar next.config para ignorar ESLint en build
8c30607 chore: Trigger Vercel rebuild
20619cc fix: Corregir ESLint config y ThemeToggle para SSR
e231d50 fix: Cambiar a Google Fonts via CDN para evitar errores de build
d3a0cd0 fix: Corregir errores de TypeScript y ESLint para build de producción
```

## ✅ Commit que Vercel debe usar

**Commit actual**: `5be32c1` o superior

Este commit incluye:
- ✅ ESLint configurado correctamente con FlatCompat
- ✅ ThemeToggle protegido contra SSR
- ✅ next.config.ts con `ignoreDuringBuilds: true`
- ✅ Todas las correcciones de TypeScript

## 🐛 Si aún falla

Comparte el log completo del build de Vercel para diagnosticar el problema específico.

## 📞 Soporte

Si nada funciona, contacta al soporte de Vercel:
- https://vercel.com/support
- O usa el chat en el dashboard
