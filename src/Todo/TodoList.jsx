import React from 'react';
import { MdCheck, MdDeleteForever } from 'react-icons/md';

const TodoList = ({ data, checked, onHandleDeleteTodo, onHandleCheckedTodo }) => {
  return (
    <li className="todo-item">
      {/* Conditional styling based on checked status */}
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      
      {/* Button to mark as checked */}
      <button className='check-btn' onClick={() => onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>

      {/* Button to delete the todo */}
      <button className='delete-btn' onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};


export default TodoList;