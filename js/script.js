let todolist = [];
let masterTodoList = [];
let isDone;
let num =0;

function addTodoList() {
    const text = document.getElementById("input").value;

    const item = {
        id:num++,
        text: text, 
        isDone: false
    };

  
    todolist.push(item);
    console.log(todolist);

    renderTodos(todolist);

}

function renderTodos(status){
    let todos;
    if (status == 'done'){
        todos= todolist.filter(todo => todo.isDone)
    } else if (status == 'undone') {
        todos = todolist.filter(todo => !todo.isDone )
      } else {
        todos = todolist
      }
//onclick="onToggle(${i})"
    console.log(todos)
    const html = todos.map((item,i) => {
        return `
        <div class = list>
        <li onclick="onToggle(${item.id})" class="${item.isDone? 'done' : 'undone'}">
        ${i} ${item.text} 
        </li>
        <a href="#" onclick="remove(${item.id})">X</a>
        </div>
        `
    }).join('');
    document.getElementById("area").innerHTML = html;
    document.getElementById("input").value = '';
}
// function renderTodos(status) {
//     let todos;
//         if (status == 'done'){
//             todos= todolist.filter(todo => todo.isDone)
//         } else if (status == 'undone') {
//             todos = todolist.filter(todo => !todo.isDone )
//           } else {
//             todos = todolist
//           }

//     const html = todos.map((item,i) => {
//                 return `
//                 <li onclick="onToggle(${i})" 
//                 class="${item.isDone? 'done' : 'undone'}">
//                 ${item.text} 
//                 <a href="#" onclick="remove(${i})">X</a>
//                 <a href="#" onclick="onToggle(${i})">do</a></li>`
//             }).join('');
//      document.getElementById("area").innerHTML = html;
//      document.getElementById("input").value = '';
// }


function remove(id) {
    todolist = todolist.filter(item => {
        return item.id != id;
    })
    // todolist.splice(index,1);
    renderTodos(todolist);
}

const onToggle = (id) =>{
    let curItem = todolist.find((item)=>{
        return item.id == id;
    })
    curItem.isDone = !curItem.isDone;
    console.log("dd",todolist)
    renderTodos();

} 