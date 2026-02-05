# Jarvis - Angular Application with Vercel Analytics

This is an Angular application with Vercel Web Analytics integration.

## Features

- Angular 17
- Vercel Web Analytics for tracking visitors and page views
- Modern development setup with TypeScript

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Vercel Analytics

This project includes Vercel Web Analytics integration. The analytics are automatically injected via the `inject()` function from `@vercel/analytics` in `src/main.ts`.

To view analytics:
1. Deploy your app to Vercel
2. Enable Web Analytics in the Vercel dashboard (Analytics tab)
3. View data after visitors start using your site

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or use the Vercel CLI:

```bash
vercel deploy
```

## Further help

To get more help on the Angular CLI use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
