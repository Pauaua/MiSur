# Aguas Mi Sur — Sitio Web Institucional

Sitio web para empresa distribuidora de agua purificada en Chile.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (config en `globals.css` vía `@theme`)
- **Prisma v7** + **@prisma/adapter-pg** → PostgreSQL
- **Neon Tech** (serverless PostgreSQL)
- **Vercel** (despliegue)

## Variables de entorno

Copia `.env.local` y completa con tus credenciales:

```
DATABASE_URL=           # Neon pooled connection string (pooler)
DIRECT_URL=             # Neon direct connection (migraciones)
ADMIN_SECRET=           # Contraseña del panel /admin
NEXT_PUBLIC_WHATSAPP=   # Número sin + ni espacios: 56958936744
NEXT_PUBLIC_INSTAGRAM=  # aguasmisur
NEXT_PUBLIC_FACEBOOK=   # aguas.misur
CONTACT_EMAIL=          # Email de destino
```

## Desarrollo local

```bash
npm install
# Configura .env.local con tus credenciales de Neon
npm run dev
```

## Base de datos (Neon)

1. Crea un proyecto en [neon.tech](https://neon.tech)
2. Copia las connection strings a `.env.local`
3. Ejecuta la migración inicial:

```bash
npx prisma migrate dev --name init
```

## Despliegue en Vercel

1. `vercel` (o conecta el repo en vercel.com)
2. Agrega las env vars en el dashboard de Vercel
3. El build ejecuta `npx prisma generate` automáticamente

Agrega en `package.json` → `scripts`:
```json
"vercel-build": "prisma generate && next build"
```

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing page |
| `/nosotros` | Historia y proceso |
| `/productos` | Catálogo con filtros |
| `/noticias` | Blog (DB) |
| `/noticias/[slug]` | Artículo individual |
| `/contacto` | Formulario + WhatsApp |
| `/admin/login` | Login admin |
| `/admin/noticias` | CRUD de artículos |

## Panel Admin

Accede a `/admin/login` con la contraseña definida en `ADMIN_SECRET`.
