import { registerApplication, start } from 'single-spa';

// Register the Calendar App
registerApplication({
  name: '@your-org/calendar-app',
  app: () => System.import('@your-org/calendar-app'),
  activeWhen: ['/'],
});

// Register any other microfrontends here
// For example:
// registerApplication({
//   name: '@your-org/header',
//   app: () => System.import('@your-org/header'),
//   activeWhen: ['/'],
// });

// Start the Single-SPA application
start();
