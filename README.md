# Proteinas Backend

Backend para la gestión de una tienda de suplementos y proteínas, desarrollado con Node.js, Express y MongoDB.

## 🚀 Descripción

Este proyecto es una API RESTful que permite administrar el catálogo de productos, categorías, marcas y promociones de la tienda.

## 🛠️ Tecnologías

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express.js**: Framework web para crear la API.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para modelar los datos de MongoDB.
- **Dotenv**: Manejo de variables de entorno.
- **Cors**: Middleware para habilitar CORS.

## ✨ Funcionalidades Principales

El sistema está dividido en módulos principales:

### 📦 Productos (`/api/products`)
- Gestión completa de productos (CRUD).
- Filtrado y búsqueda de productos.

### 🏷️ Categorías (`/api/categories`)
- Organización de productos en categorías.

### 🏢 Marcas (`/api/brands`)
- Gestión de marcas de suplementos.

### 🎉 Promociones (`/api/promotions`)
- Creación y gestión de promociones.
- Funcionalidad para destacar promociones (`featured`).
- Filtrado de promociones activas.

## ⚙️ Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd proteinas-backend
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto basándote en el archivo de ejemplo `.env.example`:

```bash
copy .env.example .env
```

Asegúrate de configurar las siguientes variables en tu archivo `.env`:
- `PORT`: Puerto en el que correrá el servidor (ej. 3000).
- `MONGO_URL`: Cadena de conexión a tu base de datos MongoDB.
- `NODE_ENV`: Entorno de ejecución (development/production).

## ▶️ Ejecutar el Proyecto

### Modo Desarrollo (con recarga automática)
```bash
npm run dev
```

### Modo Producción
```bash
npm start
```

## 📂 Estructura del Proyecto

```
proteinas-backend/
├── src/
│   ├── config/         # Configuración de BD y otras herramientas
│   ├── controllers/    # Lógica de los controladores
│   ├── dao/            # Data Access Objects (Modelos, Mongo, DTOs)
│   ├── middlewares/    # Middlewares (ej. manejo de errores)
│   ├── routes/         # Definición de rutas de la API
│   ├── services/       # Lógica de negocio
│   └── utils/          # Utilidades y helpers
├── .env                # Variables de entorno (no subir al repo)
├── .env.example        # Ejemplo de variables de entorno
├── app.js              # Configuración de Express
└── server.js           # Punto de entrada del servidor
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para mejoras.
