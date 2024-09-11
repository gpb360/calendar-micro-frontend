# Calendar SPA with Single-SPA

This project is a calendar application built using Single-SPA (Single Page Application) architecture. It demonstrates the use of microfrontends with React, Material-UI, and Jotai for state management.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Simple Web Server Configuration](#simple-web-server-configuration-for-micro-frontends)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

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

1. Update the `importmap.json` file in the root directory to ensure all microfrontends and dependencies are correctly mapped.

2. For each microfrontend (root-config, calendar-app, shared-ui, state-management), ensure the `vite.config.ts` file is correctly configured for building SystemJS modules.

3. Update the `index.html` file in the root directory to load the importmap and SystemJS.

## Running the Application

1. Start all microfrontends:

   ```
   pnpm run start
   ```

   This command will start development servers for all microfrontends concurrently.

2. Open your browser and navigate to `http://localhost:9000` (or the port specified in your root-config).

## Building for Production

To build all microfrontends for production:

```
pnpm run build
```

This will create production-ready builds for each microfrontend in their respective `dist` directories.

## Simple Web Server Configuration for Micro Frontends

This section describes how to set up a Simple Web Server for each micro frontend in our MonoRepo architecture. This configuration allows you to run the application outside of Vite's development and preview builds, providing flexibility to point directly to development versions of files without requiring a build.

> **Important Note**: This setup is specific to a MonoRepo environment and can be easily modified to work with development versions of files, eliminating the need for a build step.

### General Configuration Steps

For each micro frontend, follow these general steps:

1. Download and install Simple Web Server from [https://simplewebserver.org/](https://simplewebserver.org/)
2. Launch Simple Web Server
3. Configure as per the specific instructions below
4. Enable CORS: In the Advanced options, set "CORS headers" to True

### Specific Configurations

#### Root Config

- Folder Path: `packages\root-config\dist`
- Port: 9000

#### Calendar App

- Folder Path: `packages\root-config\dist`
- Port: 3003
- Basic Options: Select "Single page" and set rewrite to `/calendar-app.system.js`

#### Shared UI

- Folder Path: `packages\root-config\dist`
- Port: 3002
- Basic Options: Select "Single page" and set rewrite to `/shared-ui.system.js`

#### State Management

- Folder Path: `packages\root-config\dist`
- Port: 3001
- Basic Options: Select "Single page" and set rewrite to `/state-management.system.js`

By following these configurations, you'll have a local server setup that supports your micro frontend architecture, allowing for easier development and testing.

## Testing

### Running Tests for Shared UI Components

The shared-ui package uses Jest and React Testing Library for unit testing. To run these tests:

1. Navigate to the shared-ui package directory:

   ```
   cd packages/shared-ui
   ```

2. Run all tests:

   ```
   pnpm run test
   ```

3. Run tests in watch mode (useful during development):

   ```
   pnpm run test:watch
   ```

4. Run tests with coverage report:
   ```
   pnpm run test:coverage
   ```

### Running Tests for All Packages

To run tests for all microfrontends, including shared-ui:

```
pnpm run test
```

This command will execute tests for all packages in the monorepo.

### Best Practices for Testing Shared UI Components

When writing tests for shared UI components:

1. Test the component's rendering with different props
2. Test user interactions using `fireEvent`
3. Check for accessibility attributes
4. Mock complex dependencies when necessary
5. Keep tests isolated and independent

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Single-SPA for providing the microfrontend framework
- React for the UI library
- Material-UI for the component library
- Jotai for state management
- Vite for fast and efficient builds
- Simple Web Server for easy local development setup
