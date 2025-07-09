// Habilitar Netlify Identity
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", function (user) {
    if (!user) {
      // Iniciar sesión automáticamente si no hay usuario
      window.netlifyIdentity.on("login", function () {
        document.location.href = "/admin/";
      });
    } else {
      // Si hay un usuario, asegurarse de que esté autenticado
      if (!netlifyIdentity.currentUser()) {
        netlifyIdentity.open("login");
      }
    }
  });
}
