// Habilitar el contexto de Netlify Identity
document.addEventListener('DOMContentLoaded', () => {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', (user) => {
      if (!user) {
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/';
        });
      } else if (!window.netlifyIdentity.currentUser()) {
        window.netlifyIdentity.open('login');
      }
    });
  }
});
