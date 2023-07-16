// const todoListID_1 = '1'
// const todoListID_2 = '2'
//
// const todo = [
//     {id: todoListID_1, name: "What to learn", filtered: "all"},
//     {id: todoListID_2, name: "What to buy", filtered: "all"},
// ]
//
//
// const tasks = {
//     [todoListID_1]: [
//         {id: "11", title: "HTML", isDone: false},
//         {id: "12", title: "CSS", isDone: false},
//         {id: "13", title: "JS/TS", isDone: false}
//     ],
//     [todoListID_2]: [
//         {id: "21", title: "meat", isDone: false},
//         {id: "22", title: "cheese", isDone: false},
//         {id: "23", title: "beer", isDone: false}
//     ]
//
// }

// Function to create a new todo list

// const addTodoList = (title) => {
//     const newtodoListID = "3"
//     const newTodoList = {id: "3", name: title, filter: "all"}
//     const updatedTodo = [...todo, newTodoList]
//     // console.log(updatedTodo)
//     const updatedTasks = {...tasks, [newtodoListID]: []}
//     // console.log(updatedTasks)
// }

// addTodoList("What to read")

// const changeFiltered = (todoListID, newValueFiltered) => {
// const updatedTodo = todo.map(el => {
//     return el.id === todoListID ? {...el, filtered: newValueFiltered} : el
// })
//     return updatedTodo
// }
//
// console.log(changeFiltered("1", "aa"))
// console.log(changeFiltered(todoListID_1, "azza")[0].filtered)
//

// const removeTodoList = (todoListID) => {
//     const updatedTodo = todo.filter(el=>el.id!==todoListID)
//     delete tasks[todoListID_1]
//     return updatedTodo
// }
//
// console.log(removeTodoList("1"))
// console.log(tasks)



