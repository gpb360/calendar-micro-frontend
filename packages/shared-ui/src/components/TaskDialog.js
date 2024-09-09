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
import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem, FormControl, InputLabel, } from '@mui/material';
import { CustomDateTimePicker } from './CustomDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
export var TaskDialog = function (_a) {
    var open = _a.open, onClose = _a.onClose, onSave = _a.onSave, task = _a.task, mode = _a.mode;
    var _b = React.useState((task === null || task === void 0 ? void 0 : task.title) || ''), title = _b[0], setTitle = _b[1];
    var _c = React.useState((task === null || task === void 0 ? void 0 : task.datetime) || new Date()), datetime = _c[0], setDatetime = _c[1];
    var _d = React.useState((task === null || task === void 0 ? void 0 : task.status) || 'scheduled'), status = _d[0], setStatus = _d[1];
    var handleSave = function () {
        onSave({ title: title, datetime: datetime, status: status });
        onClose();
    };
    return (React.createElement(Dialog, { open: open, onClose: onClose },
        React.createElement(DialogTitle, null, mode === 'edit' ? 'Edit Task' : 'Add New Task'),
        React.createElement(DialogContent, null,
            React.createElement(TextField, { autoFocus: true, margin: "dense", label: "Task Title", fullWidth: true, value: title, onChange: function (e) {
                    return setTitle(e.target.value);
                } }),
            React.createElement(LocalizationProvider, { dateAdapter: AdapterDateFns },
                React.createElement(CustomDateTimePicker, { label: "Date & Time", value: datetime, onChange: function (newValue) { return setDatetime(newValue); }, renderInput: function (params) { return React.createElement(TextField, __assign({}, params)); } })),
            mode === 'edit' && (React.createElement(FormControl, { fullWidth: true, margin: "dense" },
                React.createElement(InputLabel, null, "Status"),
                React.createElement(Select, { value: status, onChange: function (e) { return setStatus(e.target.value); } },
                    React.createElement(MenuItem, { value: "scheduled" }, "Scheduled"),
                    React.createElement(MenuItem, { value: "completed" }, "Completed"),
                    React.createElement(MenuItem, { value: "rescheduled" }, "Rescheduled"),
                    React.createElement(MenuItem, { value: "canceled" }, "Canceled"))))),
        React.createElement(DialogActions, null,
            React.createElement(Button, { onClick: onClose }, "Cancel"),
            React.createElement(Button, { onClick: handleSave }, "Save"))));
};
