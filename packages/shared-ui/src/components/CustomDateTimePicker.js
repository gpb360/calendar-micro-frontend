var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { DateTimePicker, } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
/**
 * A strongly-typed `DateTimePicker` component with a `TextField`-rendered input.
 *
 * @param props - The props to pass to the underlying `DateTimePicker` component.
 * @returns A `DateTimePicker` component with a `TextField`-rendered input.
 */
export var CustomDateTimePicker = function (props) { return (React.createElement(DateTimePicker, __assign({}, props, { renderInput: function (params) { return React.createElement(TextField, __assign({}, params)); } }))); };
