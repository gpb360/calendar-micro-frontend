import React from 'react';
import { Button, TaskDialog } from '@your-org/shared-ui';
import { useTasksAtom, useAddTask, useUpdateTaskStatus, useDeleteTask, } from '@your-org/state-management';
import { format } from 'date-fns';
var App = function () {
    var tasks = useTasksAtom()[0];
    var addTask = useAddTask();
    var updateTaskStatus = useUpdateTaskStatus();
    var deleteTask = useDeleteTask();
    var _a = React.useState(false), openDialog = _a[0], setOpenDialog = _a[1];
    var _b = React.useState(null), editTask = _b[0], setEditTask = _b[1];
    var handleOpenDialog = function (task) {
        if (task === void 0) { task = null; }
        setEditTask(task);
        setOpenDialog(true);
    };
    var handleCloseDialog = function () {
        setEditTask(null);
        setOpenDialog(false);
    };
    var handleSaveTask = function (taskData) {
        if (editTask) {
            updateTaskStatus({
                id: editTask.id,
                status: taskData.status,
            });
        }
        else {
            addTask(taskData);
        }
        handleCloseDialog();
    };
    return (React.createElement("div", null,
        React.createElement("h1", null, "Calendar App"),
        React.createElement(Button, { onClick: function () { return handleOpenDialog(); } }, "Add New Task"),
        tasks.map(function (task) { return (React.createElement("div", { key: task.id },
            React.createElement("h3", null, task.title),
            React.createElement("p", null,
                "Date: ",
                format(new Date(task.datetime), 'PPpp')),
            React.createElement("p", null,
                "Status: ",
                task.status),
            React.createElement(Button, { onClick: function () { return handleOpenDialog(task); } }, "Edit"),
            React.createElement(Button, { onClick: function () { return deleteTask(task.id); } }, "Delete"))); }),
        React.createElement(TaskDialog, { open: openDialog, onClose: handleCloseDialog, onSave: handleSaveTask, task: editTask, mode: editTask ? 'edit' : 'add' })));
};
export default App;
