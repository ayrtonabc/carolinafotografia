# Configuración del Panel de Administración

## Pasos para configurar la autenticación:

### Opción 1: GitHub OAuth (Recomendado para Vercel)

1. **Crear OAuth App en GitHub:**
   - Ve a GitHub Settings > Developer settings > OAuth Apps
   - Click "New OAuth App"
   - Application name: `Karolina Fotografía CMS`
   - Homepage URL: `https://tu-sitio.vercel.app`
   - Authorization callback URL: `https://api.netlify.com/auth/done`

2. **Configurar en Vercel:**
   - Ve a tu proyecto en Vercel
   - Settings > Environment Variables
   - Agrega:
     - `GITHUB_CLIENT_ID`: Tu Client ID de GitHub
     - `GITHUB_CLIENT_SECRET`: Tu Client Secret de GitHub

3. **Actualizar config.yml:**
   ```yaml
   backend:
     name: github
     repo: tu-usuario/tu-repositorio
     branch: main
   ```

### Opción 2: Netlify Identity (Alternativa)

1. **Crear cuenta en Netlify:**
   - Conecta tu repositorio a Netlify
   - Ve a Site settings > Identity
   - Click "Enable Identity"

2. **Configurar proveedores:**
   - Identity > Settings and usage
   - Registration preferences: "Invite only"
   - External providers: Habilita GitHub, Google, etc.

3. **Actualizar config.yml:**
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```

## URLs importantes:
- Panel de administración: `/admin`
- Autenticación: `/admin/auth.html`

## Funcionalidades del CMS:
- ✅ Editar información general del sitio
- ✅ Modificar sección principal (hero)
- ✅ Actualizar información personal
- ✅ Gestionar servicios y precios
- ✅ Administrar galería de imágenes
- ✅ Subir y organizar fotos
- ✅ Optimización SEO automática