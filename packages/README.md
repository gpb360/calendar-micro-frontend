# Calendar SPA with Single-SPA

This project is a calendar application built using Single-SPA (Single Page Application) architecture. It demonstrates the use of microfrontends with React, Material-UI, and Jotai for state management.

## Project Structure

The project consists of the following microfrontends:

1. Root Config: The Single-SPA root configuration
2. Calendar App: The main calendar application
3. Shared UI: Reusable UI components
4. State Management: Centralized state management using Jotai

## Prerequisites

- Node.js (v14 or later)
- pnpm (v6 or later)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/calendar-spa.git
   cd calendar-spa
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

## Setup

1. Update the `importmap.json` file in the root directory to ensure all microfrontends and dependencies are correctly mapped for both development and production environments.

2. For each microfrontend (root-config, calendar-app, shared-ui, state-management), ensure the `vite.config.ts` file is correctly configured for building SystemJS modules and includes both development and production server configurations.

3. Update the `index.html` file in the root directory to load the appropriate importmap and SystemJS based on the environment.

## Development

To run the application in development mode:

1. Start all microfrontends in development mode:

   ```
   pnpm run dev
   ```

   This command will start development servers for all microfrontends concurrently.

2. Open your browser and navigate to `http://localhost:9000`.

## Production

To build and preview the application in production mode:

1. Build and serve all microfrontends in production mode:

   ```
   pnpm run prod
   ```

   This command will create production builds for all microfrontends and start preview servers.

2. Open your browser and navigate to the production URL (as specified in your root-config).

## Available Scripts

In each microfrontend directory, you can run:

- `pnpm run start`: Starts the development server
- `pnpm run build`: Creates a production build
- `pnpm run serve`: Serves the production build locally
- `pnpm run dev`: Starts the development server in development mode
- `pnpm run prod`: Creates a production build and starts a preview server

## Testing

To run tests for all microfrontends:

```
pnpm run test
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Single-SPA for providing the microfrontend fr
