// ESTO SE CREO PARA QUE FUNCIONE users en el archivo authMiddleware
declare namespace Express {
  interface Request {
    user?: any; // Aquí puedes poner el tipo adecuado, si tienes un modelo de usuario.
  }
}
