"use client";

import { addtodo } from "../actions/todo";

export default async function Todos(){

    let res= await fetch("http://localhost:3001/api/todos",{cache:"no-cache"});
  res = await res.json();
  return(
        <>
        <div>
            <h2>todo</h2>
            {res.data?.map((e)=>(         
                       <p>{e.todo}</p>
            
            ))}
        </div>

        <form action={addtodo}>
            <input type="text" placeholder="enter " name="name" ></input>
<input className="" type="submit"  value={"add todo"} />
        </form>
        </>
    )
}