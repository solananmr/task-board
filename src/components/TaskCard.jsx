export default function TaskCard({ task, column, deleteTask, moveTask }) {
    return (
        <div className="task-card">
            <p>{task.text}</p>

            <div className="actions">
                <button onClick={() => deleteTask(column, task.id)}>X</button>

                {column !== 'done' && (
                    <button onClick={() => moveTask(column, column === "todo" ? "doing" : "done", task.id)}>→</button>
                )}

                {column !== 'todo' && (
                    <button onClick={() => moveTask(column, column === "doing" ? "todo" : "doing", task.id)}>←</button>
                )}
            </div>
        </div>
    );
}