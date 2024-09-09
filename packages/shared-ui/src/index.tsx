import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
export { TaskDialog } from './components/TaskDialog';
export { CustomDateTimePicker } from './components/CustomDateTimePicker';
export { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
export { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
export { TextField, Button, Dialog } from '@mui/material';

export {
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
};

interface TaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (task: any) => void;
  task: any | null;
  mode: 'add' | 'edit';
}

export type { TaskDialogProps };
