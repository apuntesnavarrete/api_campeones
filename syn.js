const { User } = require('./models_sequelize'); // Importa el modelo User


async function syncModels() {
    try {
      await User.sync(); // Sincroniza el modelo User con la base de datos
      console.log('Modelos sincronizados correctamente.');
    } catch (error) {
      console.error('Error al sincronizar modelos:', error);
    } finally {
      // Cierra la conexión con la base de datos si es necesario
      // sequelize.close();
    }
  }
  
  // Llama a la función syncModels para sincronizar los modelos
  syncModels();