import { registerApplication, start } from 'single-spa';

registerApplication({
  name: "@your-org/calendar-app",
  app: () => System.import("@your-org/calendar-app"),
  activeWhen: ["/calendar"]
});

start();