import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

interface HeaderProps {
  title: string;
  onAddEvent?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onAddEvent }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {onAddEvent && (
          <Button color="inherit" onClick={onAddEvent}>
            Add Event
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
