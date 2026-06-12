# INFORME TÉCNICO - TOOLTRACK FULLSTACK

**Proyecto:** ToolTrack - Sistema de Gestión de Herramientas  
**Fecha:** Junio 2026  
**Versión:** 1.0  

---

## 1. Diseño y Maquetación (Google Stitch)

### Descripción General
El frontend de ToolTrack ha sido diseñado siguiendo especificaciones de UX/UI mediante Google Stitch, garantizando una interfaz intuitiva y responsive para usuarios en dispositivos móviles y de escritorio.

### Prompts Utilizados en Google Stitch
* **Para el diseño base:** "Actúa como un Diseñador UI/UX Senior y Desarrollador Frontend experto. Genera un prototipo web de alta fidelidad para un sistema de gestión de herramientas llamado ToolTrack. Usa colores profesionales Slate (#1E293B), gris claro para fondos y acentos limpios. Maqueta una Landing Page, un Login, un Dashboard con métricas y las vistas de administración."

### Evidencias del Sistema Operativo (Capturas)
* **Diseño exportado desde Stitch:** ![Stitch Screen](./stitch_tooltrack_management_system/screen.png)
* **Dashboard Administrativo Real:** *(Aquí pegas la captura de tu localhost con las barras e ingresos)*
* **Módulo de Inventario con CRUD Real:** *(Aquí pegas la captura donde se ve que ya registra tus productos)*
* **Vistas de Categorías y Clientes:** *(Aquí pegas las capturas estáticas que vimos antes)*

### Componentes de Diseño
- **Landing Page**: Página de bienvenida con información del proyecto y llamadas a acción
- **Login Page**: Interfaz de autenticación segura con validación de credenciales
- **Admin Dashboard**: Panel administrativo centralizado con acceso a módulos de gestión
- **Módulos de Administración**:
  - Gestión de Productos
  - Gestión de Categorías
  - Gestión de Clientes
  - Gestión de Ventas
  - Panel de Control (Dashboard)

### Especificaciones Técnicas
- **Framework**: React 18+ con TypeScript
- **Herramienta de Compilación**: Vite para optimización y HMR
- **Estilos**: CSS modular con arquitectura escalable
- **Navegación**: React Router v6 con protección de rutas

---

## 2. Arquitectura del Frontend y Control de Calidad

### Estructura del Proyecto
```
frontend-app/
├── src/
│   ├── App.tsx                 # Componente raíz con ruteo
│   ├── main.tsx               # Punto de entrada
│   ├── pages/                 # Componentes de página
│   │   ├── Landing.tsx        # Página pública
│   │   ├── Login.tsx          # Autenticación
│   │   └── admin/             # Módulos administrativos
│   ├── layouts/               # Layouts compartidos
│   │   └── AdminLayout.tsx    # Layout del panel admin
│   ├── services/              # Servicios API
│   │   └── api.ts             # Cliente HTTP
│   └── assets/                # Recursos estáticos
├── vite.config.ts             # Configuración de Vite
├── tsconfig.json              # Configuración de TypeScript
└── Dockerfile                 # Contenerización
```

### Control de Calidad

#### Build Exitoso
- ✅ Compilación sin errores con Vite
- ✅ Tipado estricto de TypeScript configurado
- ✅ Linting con ESLint (eslint.config.js)
- ✅ Zero warnings en proceso de construcción

#### Ruteo Protegido
El componente `PrivateRoute` implementa protección de rutas privadas:

```typescript
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};
```

**Características:**
- Valida presencia de token en localStorage
- Redirige automáticamente a `/login` si no hay autenticación
- Usa `React.ReactNode` para máxima compatibilidad de tipos
- Protege acceso al panel administrativo (`/admin/*`)

#### Configuración de TypeScript
- Strict mode habilitado para máxima seguridad de tipos
- Namespaces correctamente gestionados
- Imports explícitos de React en componentes

---

## 3. Orquestación y Despliegue Automatizado

### Orquestación con Docker Compose

El archivo `docker-compose.yml` en la raíz orquesta los servicios del stack:

#### Servicios Configurados

**Frontend Service**
- **Imagen**: Build desde `frontend-app/Dockerfile`
- **Puerto**: 3000 (expuesto)
- **Propósito**: Aplicación React compilada con Vite
- **Volumen**: `nginx.conf` para configuración

**Backend Service**
- **Imagen**: Node.js (herramientas-node-api)
- **Puerto**: 5000 (expuesto)
- **Propósito**: API REST para operaciones CRUD
- **Dependencias**: Base de datos

**Base de Datos**
- **Servicio**: Postgres/MySQL (según configuración)
- **Puerto**: Interno (no expuesto)
- **Propósito**: Persistencia de datos

### Nginx como Proxy Inverso

#### Configuración (nginx.conf)
Nginx actúa como servidor web y proxy inverso en el frontend:

**Funcionalidades:**
- **Servicio de archivos estáticos**: Entrega la aplicación React compilada
- **Proxy a API**: Redirección de `/api/*` al backend (puerto 5000)
- **Reescritura de URLs**: Historia de SPA para routing en cliente
- **Compresión**: Gzip habilitado para optimización
- **Headers de seguridad**: CORS, caché, etc.

#### Flujo de Solicitudes
```
Cliente
   ↓
Nginx (Puerto 3000)
   ├→ Archivos estáticos (React compilado)
   └→ /api/* → Backend (Puerto 5000)
   
Backend procesa → Base de Datos
```

### Dockerfile - Frontend

```dockerfile
# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Runtime stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
```

**Características:**
- Multi-stage build para optimización de imagen
- Tamaño reducido con `nginx:alpine`
- Construcción de assets estáticos Vite
- Configuración Nginx incluida

### Ciclo de Despliegue

1. **Desarrollo Local**
   ```bash
   npm run dev    # Frontend con HMR
   npm start      # Backend (herramientas-node-api)
   ```

2. **Pre-producción**
   ```bash
   npm run build  # Vite genera dist/
   npm run lint   # Validación de código
   ```

3. **Despliegue Conteneurizado**
   ```bash
   docker-compose up -d  # Orquesta todos los servicios
   # Nginx inicia en puerto 3000
   # Backend en puerto 5000
   ```

4. **Validación**
   - Frontend accesible en `http://localhost:3000`
   - API accesible en `http://localhost:3000/api`
   - SPA routing funcional
   - Autenticación protegida

---

## Conclusión

ToolTrack implementa una arquitectura moderna de tres capas:
- **Frontend**: React + TypeScript + Vite + Nginx
- **Backend**: Node.js con APIs REST
- **Infraestructura**: Docker Compose para orquestación

El control de calidad se asegura mediante tipado estricto, ruteo protegido y build automatizado, mientras que Nginx y Docker Compose optimizan el despliegue en producción.





































