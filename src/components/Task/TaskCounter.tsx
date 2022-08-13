import type { FC } from "react";

import { createStyle } from "@kaze-style/react";
import { useAtomValue } from "jotai";

import { taskLengthState } from "state/tasks";

const classes = createStyle({
  counter: {
    fontSize: "40px",
    paddingBottom: "4px",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "black",
    marginBottom: "30px",
  },
});

const TaskCounter: FC = () => {
  const taskLength = useAtomValue(taskLengthState);
  return <div className={classes.counter}>TODO: {taskLength}件</div>;
};

export default TaskCounter;
