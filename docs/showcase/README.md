# 7poster Web Showcase

This folder contains a static web showcase implemented from `docs/DESIGN_CONSTITUTION.md`.

## Local Preview

From repo root:

```powershell
python -m http.server 8080
```

Then open:

`http://localhost:8080/docs/showcase/`

If Python is not installed, use:

```powershell
npx --yes serve .
```

And open:

`http://localhost:3000/docs/showcase/`

## Deploy (GitHub Pages)

Recommended simple approach:

1. Push this repository to your GitHub fork.
2. Go to **Settings -> Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose branch `main` and folder `/docs` or `/ (root)` depending on your setup.
5. Access the page at your Pages URL with `/showcase/` suffix when deploying from `/docs`.

