"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDialog = exports.StyledDateTimePicker = exports.InputLabel = exports.FormControl = exports.MenuItem = exports.Select = exports.DialogTitle = exports.DialogContent = exports.DialogActions = exports.Dialog = exports.TextField = exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return material_1.Button; } });
Object.defineProperty(exports, "TextField", { enumerable: true, get: function () { return material_1.TextField; } });
Object.defineProperty(exports, "Dialog", { enumerable: true, get: function () { return material_1.Dialog; } });
Object.defineProperty(exports, "DialogActions", { enumerable: true, get: function () { return material_1.DialogActions; } });
Object.defineProperty(exports, "DialogContent", { enumerable: true, get: function () { return material_1.DialogContent; } });
Object.defineProperty(exports, "DialogTitle", { enumerable: true, get: function () { return material_1.DialogTitle; } });
Object.defineProperty(exports, "Select", { enumerable: true, get: function () { return material_1.Select; } });
Object.defineProperty(exports, "MenuItem", { enumerable: true, get: function () { return material_1.MenuItem; } });
Object.defineProperty(exports, "FormControl", { enumerable: true, get: function () { return material_1.FormControl; } });
Object.defineProperty(exports, "InputLabel", { enumerable: true, get: function () { return material_1.InputLabel; } });
var x_date_pickers_1 = require("@mui/x-date-pickers");
var AdapterDateFns_1 = require("@mui/x-date-pickers/AdapterDateFns");
var StyledDateTimePicker = function (props) { return ((0, jsx_runtime_1.jsx)(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDateFns_1.AdapterDateFns, children: (0, jsx_runtime_1.jsx)(x_date_pickers_1.DateTimePicker, __assign({}, props)) })); };
exports.StyledDateTimePicker = StyledDateTimePicker;
var TaskDialog = function (_a) {
    var open = _a.open, onClose = _a.onClose, onSave = _a.onSave, task = _a.task, mode = _a.mode;
    var _b = react_1.default.useState((task === null || task === void 0 ? void 0 : task.title) || ''), title = _b[0], setTitle = _b[1];
    var _c = react_1.default.useState((task === null || task === void 0 ? void 0 : task.datetime) || new Date()), datetime = _c[0], setDatetime = _c[1];
    var _d = react_1.default.useState((task === null || task === void 0 ? void 0 : task.status) || 'scheduled'), status = _d[0], setStatus = _d[1];
    var handleSave = function () {
        onSave({ title: title, datetime: datetime, status: status });
        onClose();
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.Dialog, { open: open, onClose: onClose, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: mode === 'edit' ? 'Edit Task' : 'Add New Task' }), (0, jsx_runtime_1.jsxs)(material_1.DialogContent, { children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { autoFocus: true, margin: "dense", label: "Task Title", fullWidth: true, value: title, onChange: function (e) { return setTitle(e.target.value); } }), (0, jsx_runtime_1.jsx)(exports.StyledDateTimePicker, { label: "Date & Time", value: datetime, onChange: function (newValue) { return setDatetime(newValue); } }), mode === 'edit' && ((0, jsx_runtime_1.jsxs)(material_1.FormControl, { fullWidth: true, margin: "dense", children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, { children: "Status" }), (0, jsx_runtime_1.jsxs)(material_1.Select, { value: status, onChange: function (e) { return setStatus(e.target.value); }, children: [(0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "scheduled", children: "Scheduled" }), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "completed", children: "Completed" }), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "rescheduled", children: "Rescheduled" }), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "canceled", children: "Canceled" })] })] }))] }), (0, jsx_runtime_1.jsxs)(material_1.DialogActions, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, { onClick: onClose, children: "Cancel" }), (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: handleSave, children: "Save" })] })] }));
};
exports.TaskDialog = TaskDialog;
