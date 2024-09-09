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
import { atom, useAtom } from 'jotai';
var tasksAtom = atom([]);
export var useTaskStore = function () {
    var _a = useAtom(tasksAtom), tasks = _a[0], setTasks = _a[1];
    var addTask = function (newTask) {
        setTasks(function (prevTasks) { return __spreadArray(__spreadArray([], prevTasks, true), [__assign(__assign({}, newTask), { id: Date.now().toString(), status: 'scheduled' })], false); });
    };
    var updateTask = function (id, updatedTask) {
        setTasks(function (prevTasks) { return prevTasks.map(function (task) { return (task.id === id ? __assign(__assign({}, task), updatedTask) : task); }); });
    };
    var deleteTask = function (id) {
        setTasks(function (prevTasks) { return prevTasks.filter(function (task) { return task.id !== id; }); });
    };
    return { tasks: tasks, addTask: addTask, updateTask: updateTask, deleteTask: deleteTask };
};
