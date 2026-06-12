# --- Etapa de Compilación ---
FROM node:18-alpine AS builder
WORKDIR /app

# Algunos paquetes nativos (como esbuild de Vite) pueden necesitar libc6-compat en Alpine
RUN apk add --no-cache libc6-compat

# Forzamos NODE_ENV a development para que Coolify no ignore las devDependencies
ENV NODE_ENV=development

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar TODAS las dependencias de forma limpia
RUN npm install

# Copiar el resto del código
COPY . .

# Volvemos a producción y compilamos
ENV NODE_ENV=production
RUN npm run build

# --- Etapa de Producción ---
FROM nginx:alpine
# Copia el build de Vite hacia el directorio público de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada si existe, o usar la por defecto
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]