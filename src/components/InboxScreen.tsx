import React, { useEffect } from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

import { useDispatch, useSelector } from "react-redux";

import { fetchTasks, AppDispatch } from "../lib/store";

import TaskList, { taskBoxType } from "./TaskList";

export default function InboxScreen() {
  const dispatch = useDispatch<AppDispatch>();
  // We're retrieving the error field from our updated store
  const { error } = useSelector((state: taskBoxType) => state.taskbox);
  // The useEffect triggers the data fetching when the component is mounted
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  if (error) {
    return (
      <div className="w-full h-fit bg-white text-center p-4 ">
        <SentimentVeryDissatisfiedIcon color="info" fontSize="large" />
        <p className="text-base leading-6 font-extrabold text-gray-700">
          Oh no!
        </p>
        <p className="text-sm leading-5 text-gray-700">Something went wrong</p>
      </div>
    );
  }
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="text-xl leading-8 cursor-pointer whitespace-no-wrap overflow-hidden font-extrabold text-teal-900 inline-block align-top max-w-full">
          Taskbox
        </h1>
      </nav>
      <TaskList />
    </div>
  );
}
