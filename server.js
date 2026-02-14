import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './src/config/db.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

// Conectar a BD y luego iniciar servidor
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
            console.log(`📍 http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('❌ Error al iniciar:', error);
        process.exit(1);
    });