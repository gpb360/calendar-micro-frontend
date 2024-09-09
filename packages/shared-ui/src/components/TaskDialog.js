import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem, FormControl, InputLabel, } from '@mui/material';
import { CustomDateTimePicker } from './CustomDateTimePicker';
export var TaskDialog = function (_a) {
    var open = _a.open, onClose = _a.onClose, onSave = _a.onSave, task = _a.task, mode = _a.mode;
    var _b = React.useState((task === null || task === void 0 ? void 0 : task.title) || ''), title = _b[0], setTitle = _b[1];
    var _c = React.useState((task === null || task === void 0 ? void 0 : task.datetime) || new Date()), datetime = _c[0], setDatetime = _c[1];
    var _d = React.useState((task === null || task === void 0 ? void 0 : task.status) || 'scheduled'), status = _d[0], setStatus = _d[1];
    var handleSave = function () {
        if (datetime) {
            if (mode === 'edit' && task) {
                onSave({ id: task.id, title: title, datetime: datetime, status: status });
            }
            else {
                onSave({ title: title, datetime: datetime });
            }
            onClose();
        }
        else {
            console.error('Datetime cannot be null');
        }
    };
    return (React.createElement(Dialog, { open: open, onClose: onClose },
        React.createElement(DialogTitle, null, mode === 'edit' ? 'Edit Task' : 'Add New Task'),
        React.createElement(DialogContent, null,
            React.createElement(TextField, { autoFocus: true, margin: "dense", label: "Task Title", fullWidth: true, value: title, onChange: function (e) { return setTitle(e.target.value); } }),
            React.createElement(CustomDateTimePicker, { label: "Date & Time", value: datetime, onChange: function (newValue) { return setDatetime(newValue); } }),
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
