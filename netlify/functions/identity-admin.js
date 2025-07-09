// Netlify Function para manejar la autenticación del admin
exports.handler = async (event, context) => {
  try {
    // Verificar si el usuario está autenticado
    const user = context.clientContext && context.clientContext.user;
    
    if (!user) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'No autorizado' })
      };
    }

    // Si el usuario está autenticado, devolver información del usuario
    return {
      statusCode: 200,
      body: JSON.stringify({ user })
    };
  } catch (error) {
    console.error('Error en la función de identidad:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error interno del servidor' })
    };
  }
};
