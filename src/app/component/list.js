"use client"
import React from 'react'

export default function List({todo}) {

 
    const edit= async()=>{
        console.log(`${e}sss`);
        
    }
    const dlt=async ()=>{
        console.log(`${e}sss`);
        
    }
    
  return (
    <div>
   <div className='d-flex flex-row '>
                        <p>{todo.todo}</p>
                        <button onClick={()=> edit(todo.id)}>edit</button>
                        <button onClick={()=> dlt(todo.id)}>dlt</button>

                   </div>
    </div>
  )
}
