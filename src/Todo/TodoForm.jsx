
import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  // Set the initial state for the todo item (with id, content, and checked)
  const [inputValue, setInputValue] = useState({
    id: "", 
    content: "", 
    checked: false
  });

  // Handle changes to the input field, only update the 'content' field
  const handleInputChange = (value) => {
    setInputValue(prevState => ({
      ...prevState,  // Keep other fields the same (id, checked)
      content: value // Update only the 'content' field
    }));
  };

  // Handle form submission, add the todo item and reset the input fields
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Call the parent component's function to add a new todo item
    onAddTodo(inputValue);

    // Reset the input fields after submission
    setInputValue({
      id: "", 
      content: "", 
      checked: false
    });
  };

  return (
    <>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue.content || ""}  // Ensure value is always a string
              onChange={(event) => {
                handleInputChange(event.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add task
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default TodoForm;
