# --- Etapa de Compilación ---
# Cambiamos de Alpine a Debian (node:20) para máxima compatibilidad con binarios en Linux (evita segfaults de esbuild)
FROM node:20 AS builder
WORKDIR /app

# Forzar desarrollo para que Coolify/Docker no ignore las devDependencies
ENV NODE_ENV=development

# Copiar SOLO package.json (ignoramos el lock para descargar binarios nativos de Linux directamente)
COPY package.json ./

# Instalar TODAS las dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Volvemos a producción y compilamos (con un fallback para imprimir errores detallados)
ENV NODE_ENV=production
RUN npm run build || (echo "VITE BUILD FALLO. Revisa los logs arriba." && exit 1)

# --- Etapa de Producción ---
FROM nginx:alpine
# Copia el build de Vite hacia el directorio público de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración personalizada si existe, o usar la por defecto
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]