import React from "react";
import StarIcon from "@mui/icons-material/Star";

export type TaskInfoProps = {
  id: string;
  title: string;
  state: "TASK_INBOX" | "TASK_PINNED" | "TASK_ARCHIVED";
};
type TaskProps = {
  task: TaskInfoProps;
  onArchiveTask: (arg: string) => void;
  onPinTask: (arg: string) => void;
};

export const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) => {
  let taskBgColor: string = "bg-white";
  let starIconStyle: any = undefined;
  let titleCustomStyle: string = "text-stone-800";
  switch (state) {
    case "TASK_INBOX":
      starIconStyle = "disabled";
      break;
    case "TASK_PINNED":
      taskBgColor = "bg-indigo-50";
      starIconStyle = "primary";
      titleCustomStyle += ` ${taskBgColor}`;
      break;
    case "TASK_ARCHIVED":
      titleCustomStyle = "text-stone-400 line-through";
      break;
  }
  return (
    <div
      className={`rounded text-sm leading-5 flex flex-nowrap items-center h-12 w-full ${taskBgColor}`}
    >
      <label htmlFor="checked" aria-label={`archiveTask-${id}`} className="">
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
          className="ml-2"
        ></input>
        <span onClick={() => onArchiveTask(id)}></span>
      </label>
      <label htmlFor="title" aria-label="title" className="">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
          className={`ml-10 ${titleCustomStyle}`}
        ></input>
      </label>
      {state !== "TASK_ARCHIVED" && (
        <button
          className="bg-transparent ml-auto"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <StarIcon color={starIconStyle} fontSize="small" />
        </button>
      )}
    </div>
  );
};
