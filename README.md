# TechStore Manager

TechStore Manager es una aplicación web Full Stack diseñada para la administración eficiente del inventario de productos tecnológicos de la empresa TechStore SPA. 

Este proyecto permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre un catálogo de productos, contando con una arquitectura dividida en un Backend robusto y un Frontend moderno, responsivo e interactivo.

---

## Características Principales

* **Gestión Completa (CRUD):** Creación, visualización, edición y eliminación de productos en tiempo real.
* **Validaciones Estrictas:** Control de datos tanto en el cliente (Frontend) como en el servidor (Backend) para asegurar la integridad de la información (ej. control de stock negativo y campos obligatorios).
* **Interfaz Dashboard Moderna:** Diseño UI/UX profesional utilizando principios de diseño contemporáneos, micro-interacciones y CSS nativo puro.
* **API RESTful:** Comunicación fluida y estructurada mediante endpoints semánticos.

---

## Tecnologías Utilizadas

**Frontend:**
* [React](https://reactjs.org/) (Framework UI)
* [Vite](https://vitejs.dev/) (Build tool ultrarrápido)
* [Axios](https://axios-http.com/) (Cliente HTTP)
* HTML5 & CSS3 (Estilos nativos responsivos)

**Backend:**
* [Node.js](https://nodejs.org/) (Entorno de ejecución)
* [Express.js](https://expressjs.com/) (Framework web)
* CORS (Middleware de seguridad cruzada)

---

## Instalación y Ejecución

Para ejecutar este proyecto de manera local, necesitas tener [Node.js](https://nodejs.org/) instalado en tu equipo.

### 1. Iniciar el Backend (Servidor API)
Abre una terminal, navega a la carpeta del backend y ejecuta:

```bash
cd backend-techstore
npm install
node server.js
```

El servidor se ejecutará en `http://localhost:3000`.

### 2. Iniciar el Frontend (Interfaz de Usuario)
Abre una **nueva** terminal, navega a la carpeta del frontend y ejecuta:

```bash
cd frontend-techstore
npm install
npm run dev
```

Accede a la URL local generada por Vite (usualmente `http://localhost:5173`) en tu navegador.

---

## Endpoints de la API

La API responde en `http://localhost:3000/productos` con las siguientes rutas:

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/` | Obtiene todos los productos del inventario. |
| `GET` | `/:id` | Obtiene un producto específico por su ID. |
| `POST` | `/` | Crea un nuevo producto. |
| `PUT` | `/:id` | Actualiza la información de un producto existente. |
| `DELETE` | `/:id` | Elimina un producto del inventario. |

---

## Autor

**Alexander Pinto Billiet**
*Desarrollado para la Evaluación Sumativa 4 de Programación Front End.*
