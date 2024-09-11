import React from 'react';
import { DateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type CustomDateTimePickerProps = Omit<DateTimePickerProps<Date, Date>, 'renderInput'> & {
  onChange: (date: Date | null) => void;
};

export const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = (props): React.ReactElement => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DateTimePicker {...props} renderInput={(params: TextFieldProps) => <TextField {...params} />} />
  </LocalizationProvider>
);

export default CustomDateTimePicker;
