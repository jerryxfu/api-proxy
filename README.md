# api-proxy

Cloudflare Worker that proxies `api.jerryxf.net` to a Google Cloud Run service (`northamerica-northeast1`).

## Why

Cloud Run doesn't support custom domain mapping in some regions. This worker sits on Cloudflare's edge, rewrites the hostname and `Host` header, and forwards
requests to Cloud Run. The user hits `api.jerryxf.net` -> Cloud Run sees its own `*.run.app` domain, all good.

## How it works

1. Request arrives at `https://api.jerryxf.net/some/path`
2. Worker rewrites the hostname to the Cloud Run service URL
3. Sets the `Host` header so Cloud Run accepts the request
4. Forwards method, headers, and body as-is
5. Returns the response to the client

## Setup

### Dashboard

Paste `src/index.js` into **Cloudflare -> Workers & Pages -> Create Worker**, then add `api.jerryxf.net` under **Settings -> Triggers -> Custom Domains**.

### CLI

```bash
npx wrangler deploy
```
