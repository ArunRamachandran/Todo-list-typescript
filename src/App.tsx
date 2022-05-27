import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import './App.css';
import { TodoTask } from './components/TodoTask';
import { ITask } from './interfaces';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value: string | number = event.target.value;
    if (event.target.name === "task") {
      setTask(value);
    }
  }

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter" && task) {
      addTask();
    }
  }

  const addTask = (): void => {
    const newTask: ITask = {
      taskName: task,
      isCompleted: false,
      uniqueId: Date.now()
    };

    setTodoList([...todoList, newTask]);
    setTask("");
  }

  const completeTask = (id: number): void => {
    setTodoList(todoList.filter((todo: ITask) => todo.uniqueId !== id))
  }
 
  return (
    <div className="App">
      <header className='header'>
        <div className='input-container'>
          <input type="text" name="task" value={task || ""} onKeyDown={handleOnKeyDown} onChange={handleOnChange}  placeholder='write down your task...' />
        </div>
        <button onClick={addTask}>Create task</button>
      </header>
      <section className='section'>
        <div className='todo-list'>
          {
            todoList.map((todo: ITask, key: number) => <TodoTask task={todo} key={key} handleOnClick={completeTask}/> )
          }          
        </div>
      </section>
    </div>
  );
}

export default App;
