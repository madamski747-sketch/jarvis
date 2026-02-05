import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { inject } from '@vercel/analytics';

import { AppModule } from './app/app.module';

// Inject Vercel Analytics
inject();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
