// "use server"

import { addtodo } from "../actions/todo";
import List from "../component/list";

export default async function Todos(){

    let res= await fetch("http://localhost:3000/api/todos",{cache:"no-cache"});
  res = await res.json();


  return(
        <>
        <div>
            <h2>todo</h2>
            {res.data?.map((e)=>(         
                  <List todo={e} key={e.id}/>
            
           ))}
        </div>

        <form action={addtodo}>
            <input type="text" placeholder="enter " name="name" ></input>
<input className="" type="submit"  value={"add todo"} />
        </form>
        </>
    )
} 