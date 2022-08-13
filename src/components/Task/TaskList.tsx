import type { FC } from "react";

import { createStyle } from "@kaze-style/react";
import { useRecoilValue } from "recoil";

import TaskItem from "components/Task/TaskItem";
import { taskState } from "state/tasks";

const classes = createStyle({
  title: {
    fontSize: "30px",
    marginBottom: "5px",
  },
  buttom: {
    marginBottom: "30px",
  },
});

const TaskList: FC = () => {
  const tasks = useRecoilValue(taskState);

  return (
    <div className={classes.buttom}>
      <p className={classes.title}>Todoの一覧</p>
      <ul>
        {tasks.length === 0 ? (
          <p>タスクが存在しません</p>
        ) : (
          tasks.map((task) => <TaskItem key={task.id} {...task} />)
        )}
      </ul>
    </div>
  );
};

export default TaskList;
