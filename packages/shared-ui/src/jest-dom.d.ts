import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveStyle(style: string): R;
      // Add other custom matchers here if needed
    }
  }
}

export {};
