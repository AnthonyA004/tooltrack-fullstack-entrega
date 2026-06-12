# --- Etapa de Compilación ---
FROM node:18-alpine AS builder
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias de Node (asegurando devDependencies para vite)
RUN npm install --include=dev

# Copiar el resto del código y compilar la app de producción
COPY . .
RUN npm run build

# --- Etapa de Producción ---
FROM nginx:alpine
# Copia el build de Vite hacia el directorio público de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada si existe, o usar la por defecto
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]