import React, { useState, useEffect } from 'react';
import "./todo.css";
import Button from 'react-bootstrap/Button';

function Todo() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [newTask, setNewTask] = useState("");
    const [checkedTasks, setCheckedTasks] = useState({});

    useEffect(() => {
        const savedCheckedTasks = localStorage.getItem("checkedTasks");
        setCheckedTasks(savedCheckedTasks ? JSON.parse(savedCheckedTasks) : {});
    }, []);

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = (e) => {
        e.preventDefault();
        if (newTask.trim() !== "") {
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            setNewTask(""); 
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        const updatedCheckedTasks = { ...checkedTasks };
        delete updatedCheckedTasks[index];
        setCheckedTasks(updatedCheckedTasks);
        localStorage.setItem("checkedTasks", JSON.stringify(updatedCheckedTasks));
    };

    const toggleCheckTask = (index) => {
        const updatedCheckedTasks = { ...checkedTasks, [index]: !checkedTasks[index] };
        setCheckedTasks(updatedCheckedTasks);
        localStorage.setItem("checkedTasks", JSON.stringify(updatedCheckedTasks));
    };

    return (
        <> 
            <div className="d-flex justify-content-center align-items-center flex-column mt-5">
                <form className="form" onSubmit={addTask}>
                    <div className="mb-3 bgcolor">
                        <h3>TODO LIST</h3>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Add Your Task" 
                            value={newTask} 
                            onChange={handleInputChange} 
                        />
                        <div className="d-flex justify-content-end mt-2 me-3 bgcolor">
                            <button type="submit" className="btn btn-success w-25">ADD</button>
                        </div>
                    </div>
                </form>
                <div className="form mt-4">
                    <ol className="bgcolor" style={{ fontSize: '25px', color: 'white' }}>
                        {tasks.map((task, index) => (
                            <li key={index}>
                                <div className="d-flex justify-content-between bgcolor">
                                    <span style={{ textDecoration: checkedTasks[index] ? "line-through" : "none" }}>
                                        {task}
                                    </span>
                                    <div className="d-flex w-25 ms-5 button">
                                        {checkedTasks[index] ? (
                                            <Button onClick={() => toggleCheckTask(index)}>
                                                <i className="fa-solid fa-check-double"></i>
                                            </Button>
                                        ) : (
                                            <Button onClick={() => toggleCheckTask(index)}>
                                                <i className="fa-solid fa-square-check"></i>
                                            </Button>
                                        )}
                                        <Button onClick={() => deleteTask(index)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </Button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default Todo;
