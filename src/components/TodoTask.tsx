import React from "react";
import { ITask } from "../interfaces";

interface Props { 
    task: ITask;
    key: number;
    handleOnClick(id: number): void;
}

export const TodoTask = ({ task, key, handleOnClick }: Props) => {

    return (
        <div className="todo-task" key={key}>
            <div className="content">{task.taskName}</div>
            <button onClick={() => handleOnClick(task.uniqueId)}>X</button>
        </div>
    );
};