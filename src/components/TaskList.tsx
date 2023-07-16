import React from "react";
import { TaskInfoProps, Task } from "./Task";
import { LoadingButton } from "@mui/lab";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskState } from "../lib/store";

type stateType = {
  tasks: TaskInfoProps[];
  status: string;
  error: null;
};
type taskBoxType = {
  taskbox: stateType;
};

export default function TaskList() {
  // We're retrieving our state from the store
  const tasks = useSelector((state: taskBoxType) => {
    const tasksInOrder = [
      ...state.taskbox.tasks.filter((t) => t.state === "TASK_PINNED"),
      ...state.taskbox.tasks.filter((t) => t.state !== "TASK_PINNED"),
    ];
    const filteredTasks = tasksInOrder.filter(
      (t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
    );
    return filteredTasks;
  });

  const { status } = useSelector((state: taskBoxType) => state.taskbox);

  const dispatch = useDispatch();

  const pinTask = (value: string) => {
    // We're dispatching the Pinned event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_PINNED" }));
  };
  const archiveTask = (value: string) => {
    // We're dispatching the Archive event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_ARCHIVED" }));
  };

  const LoadingRow = (
    <div className={`w-full h-12 bg-white`}>
      <LoadingButton loading={true}></LoadingButton>
    </div>
  );
  if (status === "loading") {
    return (
      <div data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div
        className="w-full h-fit bg-white text-center"
        key={"empty"}
        data-testid="empty"
      >
        <CheckRoundedIcon color="info" fontSize="large" />
        <p className="text-base leading-6 font-extrabold text-gray-700">
          You have no tasks
        </p>
        <p className="text-sm leading-5 text-gray-700">Sit back and relax</p>
      </div>
    );
  }

  return (
    <div className="list-items" data-testid="success" key={"success"}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onPinTask={(task) => pinTask(task)}
          onArchiveTask={(task) => archiveTask(task)}
        />
      ))}
    </div>
  );
}
