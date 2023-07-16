import { Task, TaskInfoProps } from "./Task";

export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    } as TaskInfoProps,
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    } as TaskInfoProps,
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    } as TaskInfoProps,
  },
};
