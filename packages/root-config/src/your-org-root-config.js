import { registerApplication, start } from 'single-spa';
// Load shared dependencies
System.import('@your-org/shared-ui');
System.import('@your-org/state-management');

registerApplication({
  name: '@your-org/calendar-app',
  app: () => System.import('@your-org/calendar-app'),
  activeWhen: ['/'],
});

start();
