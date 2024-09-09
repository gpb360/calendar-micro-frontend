import React from 'react';
import {
  DateTimePicker,
  DateTimePickerProps,
} from '@mui/x-date-pickers/DateTimePicker';
import TextField, { TextFieldProps } from '@mui/material/TextField';

/**
 * A strongly-typed `DateTimePicker` component with a `TextField`-rendered input.
 *
 * @param props - The props to pass to the underlying `DateTimePicker` component.
 * @returns A `DateTimePicker` component with a `TextField`-rendered input.
 */
export const CustomDateTimePicker: React.FC<DateTimePickerProps<Date, Date>> = (
  props: DateTimePickerProps<Date, Date>,
): React.ReactElement => (
  <DateTimePicker
    {...props}
    renderInput={(params: TextFieldProps) => <TextField {...params} />}
  />
);
