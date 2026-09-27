import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-hosted on the VPS as plain files behind nginx, not on Vercel: no Node runtime, no image
  // optimizer. See deploy/docker-compose.prod.yml and, in the PuzzleLove repo, docs/platform.md.
  output: "export",
  images: { unoptimized: true },
  // Every route becomes a directory with its own index.html, which is what nginx serves.
  trailingSlash: true,
};

export default nextConfig;
