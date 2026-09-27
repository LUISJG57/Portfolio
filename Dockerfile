# Static export served by nginx. No Node runtime: the page is plain files, which keeps the footprint
# at a few MB on a VPS whose memory is already budgeted (see docs/platform.md in the PuzzleLove repo).
FROM node:24-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts
# next/font downloads and self-hosts the Geist fonts during the build, so this stage needs network.
COPY . .
RUN npm run build

FROM nginx:1.29-alpine AS runtime
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=15s --timeout=5s --start-period=5s --retries=3 \
  CMD ["wget", "-q", "-O", "/dev/null", "http://127.0.0.1/healthz"]
