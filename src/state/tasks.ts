import { atom } from "jotai";
import { selectAtom } from "jotai/utils";

import type { Task } from "types/Task";

export const taskState = atom<Task[]>([]);

export const taskLengthState = selectAtom(taskState, (task) => task.length);
