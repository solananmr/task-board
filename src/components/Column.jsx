import { useState } from "react";
import TaskCard from "./TaskCard";

export default function Column({ title, column, tasks, addTask, deleteTask, moveTask }) {
    const [input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!input.trim()) return;
        addTask(column, input);
        setInput("");
    }

    return (
        <div className={`column ${column}`}>
            <h2>{title}</h2>

            <form onSubmit={handleSubmit}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={"Neue Aufgabe"}
                />
            </form>

            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    column={column}
                    deleteTask={deleteTask}
                    moveTask={moveTask}
                />
            ))}
        </div>
    );
}