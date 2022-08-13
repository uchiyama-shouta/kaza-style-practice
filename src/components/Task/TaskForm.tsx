import type { ComponentProps, FC } from "react";
import { useState } from "react";

import { createStyle } from "@kaze-style/react";
import { useSetRecoilState } from "recoil";

import type { Task } from "types/Task";

import Button from "components/Button/Button";
import { taskState } from "state/tasks";

const classes = createStyle({
  title: {
    fontSize: "30px",
    marginBottom: "5px",
  },
  input: {
    width: "290px",
    height: "40px",
    paddingLeft: "5px",
    fontSize: "22px",
  },
  border: {
    borderTopStyle: "solid",
    borderRightStyle: "solid",
    borderBottomStyle: "solid",
    borderLeftStyle: "solid",
    borderTopColor: "#000",
    borderRightColor: "#000",
    borderBottomColor: "#000",
    borderLeftColor: "#000",
    borderTopWidth: "1px",
    borderRightWidth: "1px",
    borderBottomWidth: "1px",
    borderLeftWidth: "1px",
  },
  button: {
    height: "40px",
    paddingLeft: "8px",
    paddingRight: "8px",
    marginLeft: "10px",
  },
  buttom: {
    marginBottom: "30px",
  },
  flex: {
    display: "flex",
  },
});

const TaskForm: FC = () => {
  const [inputText, setInputText] = useState("");
  const setTasks = useSetRecoilState(taskState);
  const addTask = (text: Task["text"]) => {
    setTasks((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text,
        isComplete: false,
      },
    ]);
  };

  const handleChange: ComponentProps<"input">["onChange"] = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    if (inputText) {
      addTask(inputText);
      setInputText("");
    }
  };

  return (
    <div className={classes.buttom}>
      <p className={classes.title}>Todoの追加</p>
      <form onSubmit={handleSubmit}>
        <div className={classes.flex}>
          <input
            className={classes.input + " " + classes.border}
            type="text"
            value={inputText}
            onChange={handleChange}
          />
          <Button>
            追加
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
