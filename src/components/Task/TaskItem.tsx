import type { FC } from "react";

import { TrashIcon } from "@heroicons/react/outline";
import { createStyle } from "@kaze-style/react";
import { useSetAtom } from "jotai";

import type { Task } from "types/Task";

import Button from "components/Button/Button";
import { taskState } from "state/tasks";

type Props = Task;

const classes = createStyle({
  item: {
    display: "flex",
    paddingBottom: "5px",
    fontSize: "20px",
    "& input": {
      marginRight: "5px",
    },
  },
  deleteButton: {
    height: "30px",
  },
});

const TaskItem: FC<Props> = ({ id, isComplete, text }) => {
  const setTasks = useSetAtom(taskState);
  const handleToggleIsComplete = (id: Task["id"]) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              isComplete: !task.isComplete,
            }
          : task,
      ),
    );
  };

  const handleDeleteTask = (id: Task["id"]) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <li className={classes.item}>
      <label>
        <input
          type="checkbox"
          checked={isComplete}
          onChange={() => handleToggleIsComplete(id)}
        />
        {text}
      </label>
      <Button
        className={classes.deleteButton}
        onClick={() => handleDeleteTask(id)}
      >
        <TrashIcon width={20} height={30} />
      </Button>
    </li>
  );
};

export default TaskItem;
