// Configuración de Decap CMS
CMS.init({
  config: {
    // Configuración de Git Gateway
    backend: {
      name: 'git-gateway',
      branch: 'main',
    },
    // Configuración del sitio
    site_url: 'https://karolinagfotografia.pl',
    display_url: 'https://karolinagfotografia.pl',
    // Configuración de medios
    media_folder: 'public/images/uploads',
    public_folder: '/images/uploads',
    // Configuración del editor
    editor: {
      preview: true
    },
    // Configuración de idioma
    locale: 'pl',
    // Configuración de colecciones (se cargará desde config.yml)
  },
  // Cargar configuración desde el archivo YAML
  load_config_file: true,
  // Archivo de configuración
  config_file: '/admin/config.yml'
});

// Inicializar Netlify Identity
if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', user => {
    if (!user) {
      window.netlifyIdentity.on('login', () => {
        document.location.href = '/admin/';
      });
    }
  });
}
