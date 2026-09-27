# Portfolio

My coding portfolio, at **https://luisjgl.cloud** — a Next.js App Router site exported to static files and served
by nginx on a VPS I operate, not on a managed platform.

It shares that VPS with my other projects. This repository owns only the portfolio; Traefik, TLS, monitoring and the
cgroup resource tiers live in the [PuzzleLove](https://github.com/LUISJG57/PuzzleLove) repository, whose
[`docs/platform.md`](https://github.com/LUISJG57/PuzzleLove/blob/main/docs/platform.md) is the contract every app on
the host follows.

| Path | Served by |
|---|---|
| `luisjgl.cloud/` | this repository (nginx, static export) |
| `luisjgl.cloud/projects/puzzlelove/` | the write-up for PuzzleLove |
| `luisjgl.cloud/puzzlelove/` | the PuzzleLove game, its own repository and pipeline |

## Stack

Next.js 15 (App Router, `output: 'export'`), React 19, Tailwind CSS 4, framer-motion, lucide-react.

There is no Node process in production: `next build` emits `out/`, and the container is nginx plus those files —
a few MB of RAM against a 64 MB cap, which matters on a host whose memory is budgeted per slice.

## Running locally

```bash
npm install
npm run dev            # http://localhost:3000
npm run lint
npm run build          # static export into out/
```

## Deploying

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): lint and build, then a
single image to GHCR, then an SSH deploy that rsyncs `deploy/` to `/opt/portfolio`, pulls the tag, waits for the
container and checks `https://luisjgl.cloud/healthz`. A failed health check rolls back to the previous tag.

Required repository secrets (environment `production`): `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_KNOWN_HOSTS`.
The GHCR package must be marked public after the first push, or the VPS cannot pull it.

First-time setup on the server — `/opt/portfolio`, the shared `edge` network and the cgroup slices — is done by the
Ansible playbook in the PuzzleLove repository.

```
Dockerfile                        build with node, serve with nginx
deploy/nginx.conf                 static serving, cache policy, /healthz
deploy/docker-compose.prod.yml    one service, joins the shared `edge` network, no published ports
deploy/deploy.sh                  pull, start, health check, roll back
src/app/                          App Router: sections on one page, plus the PuzzleLove write-up
```
