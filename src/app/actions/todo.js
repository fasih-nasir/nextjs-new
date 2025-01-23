"use server"

import { revalidatePath } from "next/cache"


export async function addtodo(form) {
    const todo = form.get("name")
    try{
        await fetch("http://localhost:3001/api/todos", {
            method: "POST",
            body: JSON.stringify({ todo }),
        });
        revalidatePath("/todos")
    }
    catch(e){
        console.log(e);
        
    }
}