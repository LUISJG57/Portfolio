import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PuzzleLove — Luis Juarez",
  description:
    "A real-time multiplayer jigsaw puzzle and the platform around it: authoritative game server, Delta Lake pipeline, Postgres warehouse, public Superset dashboard and CI/CD with rollback, on a single 8 GB VPS.",
};

const LIVE_LINKS = [
  { label: "Play it", href: "/puzzlelove/", note: "The game itself" },
  {
    label: "Analytics dashboard",
    href: "https://superset.luisjgl.cloud/superset/dashboard/puzzlelove/",
    note: "Apache Superset, public and read-only",
  },
  {
    label: "Service status",
    href: "https://status.luisjgl.cloud/status/puzzlelove",
    note: "Uptime Kuma",
  },
  {
    label: "Source",
    href: "https://github.com/LUISJG57/PuzzleLove",
    note: "Monorepo, CI/CD and infrastructure as code",
  },
];

const STACK = [
  {
    area: "Software",
    detail:
      "TypeScript monorepo: React 19 + Konva board, Node/Express 5 + Socket.IO authoritative game server, a deterministic puzzle engine shared by client and server, Prisma over Postgres.",
  },
  {
    area: "Cloud & infrastructure",
    detail:
      "Hardened Ubuntu VPS provisioned with Ansible, Docker Compose, Traefik with automatic Let's Encrypt, Garage for S3-compatible object storage, layered firewalls, and cgroup resource tiers so no app can starve the host.",
  },
  {
    area: "CI/CD",
    detail:
      "GitHub Actions: tests, then five images to GHCR, then an SSH deploy that runs migrations, waits on a health check and rolls itself back automatically when it fails.",
  },
  {
    area: "Data engineering",
    detail:
      "Gameplay events land in an append-only table through a non-blocking sink, are extracted incrementally into Delta Lake bronze/silver/gold with PySpark, pass data-quality gates, and are published into a Postgres star schema with a transactional swap.",
  },
  {
    area: "Operations",
    detail:
      "Daily age-encrypted backups to Cloudflare R2 with tested restores, Uptime Kuma plus an external probe, and Discord alerting.",
  },
  {
    area: "Testing",
    detail:
      "Automated tests across the engine, the server (with real Socket.IO clients), the simulator and the PySpark transforms, plus an Ansible idempotency test and lint in CI.",
  },
];

const DEPTH = [
  {
    title: "The server is the referee",
    body: "A puzzle is defined by an image, rows, columns and a seed. Client and server derive identical piece shapes from that seed, so only positions ever travel over the network. The server owns the locks, batches movement every 50 ms, decides which groups snap and detects completion — a client cannot assert that it solved the puzzle.",
  },
  {
    title: "Analytics that cannot slow the game down",
    body: "Events go through a buffered sink that drops rather than blocks. The game loop never waits on the database, and the pipeline reads the event table long after the fact.",
  },
  {
    title: "The dashboard is code, and it is careful",
    body: "The public Superset dashboard is defined in Python and reapplied on every deploy. It reads the warehouse through a read-only Postgres role that cannot see player names or the pipeline's run history — only aggregates are public. Bots and synthetic history are always labeled and filterable.",
  },
  {
    title: "It shares the VPS on purpose",
    body: "This portfolio is served from the root of the same machine, the game from a subpath. Traefik strips the prefix before the request reaches the container, so every server route stays where it was and the health checks and internal clients never learned about the move.",
  },
];

function Architecture() {
  return (
    <svg
      viewBox="0 0 760 360"
      role="img"
      aria-label="Players reach Traefik over HTTPS and WebSocket. Traefik routes the root to this portfolio and the /puzzlelove/ subpath to the game server. The game server writes game state and events to Postgres and images to Garage object storage. A nightly PySpark and Delta Lake pipeline reads Postgres, writes the lake to Garage and loads a Postgres warehouse schema, which feeds both the private admin analytics and the public Superset dashboard. Postgres and Garage are backed up, age-encrypted, to Cloudflare R2."
      className="w-full h-auto"
      style={{ maxWidth: "760px" }}
    >
      <defs>
        <marker id="pl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-text)" />
        </marker>
        <style>{`
          .pl-box { fill: var(--color-background); stroke: var(--color-text); stroke-width: 1.5; }
          .pl-accent { stroke: var(--color-accent); stroke-width: 2; }
          .pl-label { fill: var(--color-text); font-family: 'InriaSans-Regular', sans-serif; font-size: 13px; }
          .pl-label-b { fill: var(--color-text); font-family: 'InriaSans-Bold', sans-serif; font-size: 13px; }
          .pl-edge { stroke: var(--color-text); stroke-width: 1.5; fill: none; marker-end: url(#pl-arrow); }
          .pl-edge-dash { stroke: var(--color-text); stroke-width: 1.5; fill: none; stroke-dasharray: 5 4; marker-end: url(#pl-arrow); opacity: 0.7; }
          .pl-note { fill: var(--color-text); font-family: 'InriaSans-Light', sans-serif; font-size: 11px; opacity: 0.8; }
        `}</style>
      </defs>

      <rect x="8" y="150" width="104" height="44" rx="22" className="pl-box" />
      <text x="60" y="177" textAnchor="middle" className="pl-label-b">Players</text>

      <rect x="152" y="150" width="84" height="44" rx="6" className="pl-box pl-accent" />
      <text x="194" y="177" textAnchor="middle" className="pl-label-b">Traefik</text>
      <text x="132" y="140" className="pl-note">HTTPS / WebSocket</text>
      <path d="M 112 172 L 150 172" className="pl-edge" />

      <rect x="284" y="84" width="140" height="44" rx="6" className="pl-box" />
      <text x="354" y="104" textAnchor="middle" className="pl-label">Portfolio</text>
      <text x="354" y="120" textAnchor="middle" className="pl-note">this site, at /</text>
      <path d="M 236 162 C 260 162 262 106 282 106" className="pl-edge" />

      <rect x="284" y="150" width="140" height="44" rx="6" className="pl-box pl-accent" />
      <text x="354" y="170" textAnchor="middle" className="pl-label-b">Game server</text>
      <text x="354" y="186" textAnchor="middle" className="pl-note">Node + Socket.IO, at /puzzlelove/</text>
      <path d="M 236 172 L 282 172" className="pl-edge" />

      <rect x="284" y="238" width="140" height="44" rx="6" className="pl-box" />
      <text x="354" y="258" textAnchor="middle" className="pl-label">Postgres</text>
      <text x="354" y="274" textAnchor="middle" className="pl-note">state + events</text>
      <path d="M 340 194 L 340 236" className="pl-edge" />

      <rect x="284" y="300" width="140" height="44" rx="6" className="pl-box" />
      <text x="354" y="320" textAnchor="middle" className="pl-label">Garage (S3)</text>
      <text x="354" y="336" textAnchor="middle" className="pl-note">images + lake</text>
      <path d="M 400 194 C 440 200 444 300 426 322" className="pl-edge" />

      <rect x="470" y="238" width="140" height="44" rx="6" className="pl-box" />
      <text x="540" y="258" textAnchor="middle" className="pl-label">PySpark + Delta</text>
      <text x="540" y="274" textAnchor="middle" className="pl-note">nightly, 04:30</text>
      <path d="M 424 260 L 468 260" className="pl-edge" />
      <path d="M 540 282 L 540 300 L 426 322" className="pl-edge-dash" />

      <rect x="470" y="150" width="140" height="44" rx="6" className="pl-box" />
      <text x="540" y="170" textAnchor="middle" className="pl-label">Warehouse</text>
      <text x="540" y="186" textAnchor="middle" className="pl-note">Postgres star schema</text>
      <path d="M 540 236 L 540 196" className="pl-edge" />

      <rect x="656" y="84" width="96" height="44" rx="6" className="pl-box" />
      <text x="704" y="104" textAnchor="middle" className="pl-label">Superset</text>
      <text x="704" y="120" textAnchor="middle" className="pl-note">public</text>
      <path d="M 610 162 C 636 162 636 106 654 106" className="pl-edge" />

      <rect x="656" y="150" width="96" height="44" rx="6" className="pl-box" />
      <text x="704" y="170" textAnchor="middle" className="pl-label">/admin</text>
      <text x="704" y="186" textAnchor="middle" className="pl-note">private</text>
      <path d="M 610 172 L 654 172" className="pl-edge" />

      <rect x="470" y="300" width="140" height="44" rx="6" className="pl-box" />
      <text x="540" y="320" textAnchor="middle" className="pl-label">Cloudflare R2</text>
      <text x="540" y="336" textAnchor="middle" className="pl-note">age-encrypted, daily</text>
      <path d="M 424 322 L 468 322" className="pl-edge-dash" />
    </svg>
  );
}

export default function PuzzleLovePage() {
  return (
    <main className="bg-secondary min-h-screen px-5 pb-20 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-14">
        <header className="flex flex-col gap-5">
          <Link
            href="/#projects"
            className="text-[var(--color-tex2)] hover:opacity-80 transition-opacity"
            style={{ fontFamily: "InriaSans-Regular", fontSize: "1rem" }}
          >
            ← All projects
          </Link>
          <h1
            className="text-[var(--color-tex2)] intersect:motion-preset-slide-right-lg"
            style={{ fontFamily: "Monocraft", fontSize: "clamp(2.5rem, 8vw, 5rem)", lineHeight: 1.05 }}
          >
            PUZZLELOVE
          </h1>
          <p
            className="max-w-3xl text-[var(--color-background)]"
            style={{ fontFamily: "InriaSans-Light", fontSize: "1.25rem", lineHeight: 1.6 }}
          >
            A real-time multiplayer jigsaw puzzle — upload a photo, it is cut into classic tabbed pieces, and
            everyone in the room assembles it together with live cursors, piece locking and snapping sounds. The
            game is the visible part; the rest of it is the production platform and data stack around it, all
            running on one 8 GB VPS that I provision, deploy, monitor and back up myself.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LIVE_LINKS.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <Link
                key={link.label}
                href={link.href}
                target={external || link.href.startsWith("/puzzlelove") ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex flex-col gap-1 rounded bg-background p-4 hover:opacity-80 transition-opacity intersect:motion-preset-slide-up-sm"
              >
                <span className="text-[var(--color-accent)]" style={{ fontFamily: "InriaSans-Bold", fontSize: "1.1rem" }}>
                  {link.label} →
                </span>
                <span className="text-[var(--color-text)]" style={{ fontFamily: "InriaSans-Light", fontSize: "0.9rem" }}>
                  {link.note}
                </span>
              </Link>
            );
          })}
        </section>

        <section className="flex flex-col gap-5">
          <h2 className="text-[var(--color-tex2)]" style={{ fontFamily: "Monocraft", fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
            HOW IT FITS TOGETHER
          </h2>
          <div className="rounded bg-background p-5 intersect:motion-preset-slide-up-sm">
            <Architecture />
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <h2 className="text-[var(--color-tex2)]" style={{ fontFamily: "Monocraft", fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
            WHAT WAS BUILT
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {STACK.map((row) => (
              <div key={row.area} className="flex flex-col gap-2 rounded bg-background p-4 intersect:motion-preset-slide-left-lg">
                <h3 className="text-[var(--color-secondary)]" style={{ fontFamily: "InriaSans-Bold", fontSize: "1.35rem" }}>
                  {row.area}
                </h3>
                <p className="text-[var(--color-text)]" style={{ fontFamily: "InriaSans-Light", lineHeight: 1.55 }}>
                  {row.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <h2 className="text-[var(--color-tex2)]" style={{ fontFamily: "Monocraft", fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
            THE DECISIONS I CARE ABOUT
          </h2>
          <div className="flex flex-col gap-4">
            {DEPTH.map((item) => (
              <div key={item.title} className="rounded bg-background p-5 intersect:motion-preset-slide-up-sm">
                <h3 className="mb-2 text-[var(--color-secondary)]" style={{ fontFamily: "InriaSans-Bold", fontSize: "1.35rem" }}>
                  {item.title}
                </h3>
                <p className="text-[var(--color-text)]" style={{ fontFamily: "InriaSans-Light", lineHeight: 1.6 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[var(--color-background)]" style={{ fontFamily: "InriaSans-Light" }}>
            The repository documents every one of these as a decision record, alongside a build journey that walks
            through the incidents found along the way with their root causes and fixes.{" "}
            <Link
              href="https://github.com/LUISJG57/PuzzleLove/blob/main/docs/journey.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-tex2)] underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Read the journey
            </Link>
            .
          </p>
        </section>

        <section className="flex flex-col gap-5">
          <h2 className="text-[var(--color-tex2)]" style={{ fontFamily: "Monocraft", fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
            SEE IT
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            <figure className="flex flex-col gap-2">
              <Image
                src="/images/puzzlelove/game.png"
                alt="The global room: a shared board with pieces, other players' cursors and the reference silhouette"
                width={1200}
                height={750}
                className="h-auto w-full rounded"
              />
              <figcaption className="text-[var(--color-background)]" style={{ fontFamily: "InriaSans-Light", fontSize: "0.9rem" }}>
                The global room — shared board, live cursors, reference silhouette.
              </figcaption>
            </figure>
            <figure className="flex flex-col gap-2">
              <Image
                src="/images/puzzlelove/superset-dashboard.png"
                alt="The public Superset dashboard over the warehouse, with a traffic filter separating humans, bots and synthetic history"
                width={1200}
                height={1252}
                className="h-auto w-full rounded"
              />
              <figcaption className="text-[var(--color-background)]" style={{ fontFamily: "InriaSans-Light", fontSize: "0.9rem" }}>
                Superset — every number comes from the nightly pipeline, not the game database.
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </main>
  );
}
