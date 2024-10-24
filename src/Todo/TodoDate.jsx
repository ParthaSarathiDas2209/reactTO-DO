import React from 'react';
import { useState, useEffect } from 'react';

const TodoDate = () => {
    const [dateTime,setDateTime] = useState(" ");
    
//todo Date and Time
useEffect(()=>{
    const interval = setInterval(()=>{
       const now  = new Date();
       const formattedDate = now.toLocaleDateString();
       const formattedTime = now.toLocaleTimeString();  
       setDateTime(`${formattedDate} - ${formattedTime}`);
     },1000);
   
     return () => clearInterval(interval);
   },[]);
   
  return  <h2 className="date-Time">{dateTime}</h2>
}

export default TodoDate;
