import { React, useState } from "react";
import "./ToDo.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoDate  from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";


const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

const handleFormSubmit = (inputValue) => {
  const { content, checked } = inputValue;
  if(!content) return;
  
  const newId = Date.now(); // Generate a unique ID
  const ifTodoContentMatched = task.find(
    (curTask) => curTask.content === content
  );
  if(ifTodoContentMatched) return;

  setTask((prevTask) => [...prevTask, {id : newId,content, checked}]);
 };

setLocalStorageTodoData(task);

// to do handleDelete Function
    const handleDeleteToDo = (value) =>{ 
        const updatedTask = task.filter((curTask)=>curTask.content !== value);
        setTask(updatedTask);
    };

    //todo handleClearTodoData 
    const handleClearToDoData = () => {
      setTask([]);
    };

    const handleCheckedTodo = (content) => {
      const updatedTask = task.map((curTask) => {
        if (curTask.content === content){
          return { ...curTask, checked : !curTask.checked};
        }else{
          return curTask;
        }
      });
      setTask(updatedTask);
    }

  return (
    <> 
      <section className="todo-container">
        <header>
          <h1>To-Do List</h1>
         <TodoDate/>
        </header>
       <TodoForm  onAddTodo={handleFormSubmit}/>
      <section className="myUnOrdList">
        <ul>
            {
                task.map((curTask) =>{
                    return (
                    <TodoList
                    key ={curTask.id} 
                    data = {curTask.content} 
                    checked ={curTask.checked} 
                    onHandleCheckedTodo={handleCheckedTodo} 
                    onHandleDeleteTodo={handleDeleteToDo}
                    />
                    );
                })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearToDoData}>Clear All</button>
      </section>
      </section>
    </>

  );
};

export default Todo;