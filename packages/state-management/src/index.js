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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeleteTask = exports.useUpdateTaskStatus = exports.useAddTask = exports.useTasksAtom = void 0;
var jotai_1 = require("jotai");
var tasksAtom = (0, jotai_1.atom)([]);
var useTasksAtom = function () { return (0, jotai_1.useAtom)(tasksAtom); };
exports.useTasksAtom = useTasksAtom;
var useAddTask = function () {
    var _a = (0, jotai_1.useAtom)(tasksAtom), setTasks = _a[1];
    return function (newTask) {
        setTasks(function (tasks) { return __spreadArray(__spreadArray([], tasks, true), [
            __assign(__assign({}, newTask), { id: Math.random().toString(36).substr(2, 9), status: 'scheduled' })
        ], false); });
    };
};
exports.useAddTask = useAddTask;
var useUpdateTaskStatus = function () {
    var _a = (0, jotai_1.useAtom)(tasksAtom), setTasks = _a[1];
    return function (update) {
        setTasks(function (tasks) {
            return tasks.map(function (task) {
                return task.id === update.id ? __assign(__assign({}, task), { status: update.status }) : task;
            });
        });
    };
};
exports.useUpdateTaskStatus = useUpdateTaskStatus;
var useDeleteTask = function () {
    var _a = (0, jotai_1.useAtom)(tasksAtom), setTasks = _a[1];
    return function (id) {
        setTasks(function (tasks) { return tasks.filter(function (task) { return task.id !== id; }); });
    };
};
exports.useDeleteTask = useDeleteTask;
