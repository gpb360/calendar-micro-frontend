import React from 'react';
import { CircularProgress, Box } from '@mui/material';

interface LoadingSpinnerProps {
  size?: number;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 40 }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
      <CircularProgress size={size} />
    </Box>
  );
};
