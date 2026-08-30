#!/usr/bin/env bash
# Superset workspace setup. Runs once per new workspace, in the workspace dir.
set -euo pipefail

# Bring over local-only env files from the root repo (never committed, so a
# fresh worktree won't have them).
if [ -n "${SUPERSET_ROOT_PATH:-}" ]; then
  for f in .env .env.local; do
    if [ -f "$SUPERSET_ROOT_PATH/$f" ] && [ ! -f "$f" ]; then
      cp "$SUPERSET_ROOT_PATH/$f" "$f"
      echo "setup: copied $f from root repo"
    fi
  done
fi

# Start background services if the project defines any.
if [ -f docker-compose.yml ] || [ -f docker-compose.yaml ] || [ -f compose.yml ] || [ -f compose.yaml ]; then
  if command -v docker >/dev/null 2>&1; then
    echo "setup: starting docker compose services"
    docker compose up -d
  else
    echo "setup: compose file found but docker is not installed; skipping" >&2
  fi
fi

# Install dependencies using whichever package manager the repo commits a lockfile for.
if [ -f package.json ]; then
  if   [ -f bun.lockb ] || [ -f bun.lock ]; then echo "setup: bun install";  bun install
  elif [ -f pnpm-lock.yaml ];               then echo "setup: pnpm install"; pnpm install
  elif [ -f yarn.lock ];                    then echo "setup: yarn install"; yarn install
  else                                           echo "setup: npm install";  npm install
  fi
fi

echo "setup: done"
