import './index.css'
import { useState } from 'react';
import TaskCard from './components/TaskCard';
import Column from './components/Column';


export default function App() {
  const [tasks, setTasks] = useState({
    todo: [],
    doing: [],
    done: []
  });

  console.log(tasks);

  function addTask(column, text) {
    const newTask = {
      id: Date.now(),
      text
    };

    setTasks(prev => ({
      ...prev,
      [column]: [...prev[column], newTask]
    }));
  }

  function deleteTask(column, taskId) {
    setTasks(prev => ({
      ...prev,
      [column]: prev[column].filter(task => task.id !== taskId)
    }));
  }

  function moveTask(fromColum, toColum, taskId) {
    const taskToMove = tasks[fromColum].find(t => t.id === taskId);

    setTasks(prev => ({
      ...prev,
      [fromColum]: prev[fromColum].filter(t => t.id !== taskId),
      [toColum]: [...prev[toColum], taskToMove]
    }));
  }

  return (
    <div className="board">

      <Column
        title="To Do"
        column="todo"
        tasks={tasks.todo}
        addTask={addTask}
        deleteTask={deleteTask}
        moveTask={moveTask}
      />

      <Column
        title="Doing"
        column="doing"
        tasks={tasks.doing}
        addTask={addTask}
        deleteTask={deleteTask}
        moveTask={moveTask}
      />

      <Column
        title="Done"
        column="done"
        tasks={tasks.done}
        addTask={addTask}
        deleteTask={deleteTask}
        moveTask={moveTask}
      />
    </div>
  )
}