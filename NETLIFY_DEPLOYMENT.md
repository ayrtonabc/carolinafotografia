# Guía de Despliegue en Netlify

## Configuración Inicial

### 1. Preparar el Repositorio
1. Sube tu código a GitHub
2. Asegúrate de que el repositorio sea público o que Netlify tenga acceso

### 2. Configurar Netlify
1. Ve a [Netlify](https://netlify.com) y crea una cuenta
2. Conecta tu repositorio de GitHub
3. Configura los ajustes de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

### 3. Habilitar Netlify Identity
1. En el dashboard de Netlify, ve a **Site settings > Identity**
2. Haz clic en **Enable Identity**
3. En **Registration preferences**, selecciona **Invite only** (recomendado)
4. En **External providers**, puedes habilitar GitHub, Google, etc.

### 4. Configurar Git Gateway
1. En **Site settings > Identity > Services**, habilita **Git Gateway**
2. Esto permite que Decap CMS se conecte a tu repositorio

### 5. Actualizar URLs
En los archivos de configuración, reemplaza:
```yaml
site_url: https://tu-sitio.netlify.app
display_url: https://tu-sitio.netlify.app
```
Con tu URL real de Netlify.

### 6. Invitar Usuarios
1. Ve a **Site settings > Identity > Invite users**
2. Invita a los usuarios que necesiten acceso al CMS
3. Los usuarios recibirán un email para configurar su contraseña

## Acceso al CMS

- URL del sitio: `https://tu-sitio.netlify.app`
- URL del admin: `https://tu-sitio.netlify.app/admin`

## Desarrollo Local

Para desarrollo local, cambia en `config.yml`:

```yaml
# Comentar la configuración de producción:
# backend:
#   name: git-gateway
#   branch: main

# Descomentar la configuración local:
backend:
  name: test-repo

site_url: http://localhost:4322
display_url: http://localhost:4322
```

## Archivos Importantes para Netlify

- `netlify.toml` - Configuración principal de Netlify
- `public/_redirects` - Reglas de redirección
- `public/admin/config.yml` - Configuración de Decap CMS

## Solución de Problemas

### CMS no carga
1. Verifica que Netlify Identity esté habilitado
2. Verifica que Git Gateway esté configurado
3. Revisa la consola del navegador para errores

### Errores de autenticación
1. Verifica que el usuario esté invitado en Netlify Identity
2. Verifica que las URLs en config.yml sean correctas

### Cambios no se guardan
1. Verifica que Git Gateway tenga permisos de escritura
2. Verifica que la rama configurada (main) sea correcta

## Ventajas de Netlify vs Vercel para CMS

✅ **Netlify Identity integrado**
✅ **Git Gateway nativo**
✅ **Mejor soporte para Decap CMS**
✅ **Configuración más simple**
✅ **Formularios integrados**
✅ **Funciones serverless incluidas**