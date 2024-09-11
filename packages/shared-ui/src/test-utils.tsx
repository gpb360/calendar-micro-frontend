import React from 'react';
import { render, RenderOptions, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const AllTheProviders: React.FC = ({ children }) => {
  return <>{children}</>;
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, screen };
