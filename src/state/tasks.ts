import { atom, selector } from "recoil";

import type { Task } from "types/Task";

export const taskState = atom<Task[]>({
  key: "tasks",
  default: [],
});

export const taskLengthState = selector<number>({
  key: "taskLength",
  get: ({ get }) => get(taskState).length,
});
