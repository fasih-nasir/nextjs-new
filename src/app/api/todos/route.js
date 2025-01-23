const todos = [
    { id: 1, todo: "task1", is: false },
    { id: 2, todo: "task2", is: false },
    { id: 3, todo: "task3", is: false },
    { id: 4, todo: "task4", is: false },
    { id: 5, todo: "task5", is: false },
    { id: 6, todo: "task6", is: false },

]
export async function GET(request) {
    return Response.json({
        data: todos,
        msg: "todos add succesfully",
    })
}


export async function HEAD(request) { }

export async function POST(request) {
  
    const data=await request.json()
  const obj={
    ...data,
    is:false,
    id:todos.length+1,
  }
  todos.push(obj)
    console.log(data);
    return Response.json({
        data: todos,
        msg: "todos add succesfully",
    })
 }

export async function PUT(request) { }

export async function DELETE(request) { }

export async function PATCH(request) { }

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
export async function OPTIONS(request) { }