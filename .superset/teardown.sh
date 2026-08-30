#!/usr/bin/env bash
# Superset workspace teardown. Runs when the workspace is deleted.
set -euo pipefail

if [ -f docker-compose.yml ] || [ -f docker-compose.yaml ] || [ -f compose.yml ] || [ -f compose.yaml ]; then
  if command -v docker >/dev/null 2>&1; then
    echo "teardown: stopping docker compose services"
    docker compose down -v
  fi
fi

echo "teardown: done"
