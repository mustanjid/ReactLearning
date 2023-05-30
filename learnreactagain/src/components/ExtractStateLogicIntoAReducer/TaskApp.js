import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TaskReducer from "./TasksReducer";

export default function TaskApp()
{
    const [tasks, dispatch] = useReducer(TaskReducer, initialTasks)

    function handleAddTask(text)
    {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
        })
    }

    function handleChangeTask(task)
    {
        dispatch({
            type: 'change',
            task: task,
        })
    }

    function handleDeleteTask(taskId)
    {
        dispatch({
            type: 'deleted',
            id: taskId,
        })
    }

    return(
        <>
            <h1>Task App</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
        </>
    )
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];