# --- Etapa de Compilación ---
FROM oven/bun:1.1-alpine AS builder
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json bun.lockb* package-lock.json* ./
RUN bun install

# Copiar el resto del código y compilar la app de producción
COPY . .
RUN bun run build

# --- Etapa de Producción ---
FROM nginx:alpine
# Copiar los archivos estáticos compilados al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar una configuración personalizada de Nginx para manejar el enrutamiento de React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]