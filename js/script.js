let todolist = [];
let isDone;
let num =0;


todolist=JSON.parse(localStorage.getItem('data'));

if(todolist== null){
    todolist=[];
}else {
    console.log(todolist)
    renderTodos('kkk');
}

function addTodoList() {

    const text = document.getElementById("input").value;

    const item = {
        id:num++,
        text: text, 
        isDone: false
    };

    todolist.push(item);
    console.log(todolist);

    localStorage.setItem('data', JSON.stringify(todolist));

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

    const html = todos.map((item,i) => {
        return `
        <div class = "list list-group-item list-group-item-action list-group-item-warning">
        <span onclick="onToggle(${item.id})" class="${item.isDone? 'done' : 'undone'}">
         ${item.text}&ensp;
        </span>
        <a href="#" onclick="remove(${item.id})">X</a>
        </div>
        `
    }).join('');
    document.getElementById("area").innerHTML = html;
    document.getElementById("input").value = '';
}


function remove(id) {

    todolist = todolist.filter(item => {
        return item.id != id;
    })

    localStorage.setItem('data', JSON.stringify(todolist));

    // todolist.splice(index,1);
    renderTodos(todolist);
}

const onToggle = (id) =>{
    let curItem = todolist.find((item)=>{
        return item.id == id;
    })
    curItem.isDone = !curItem.isDone;
    console.log("dd",todolist)
    localStorage.setItem('data', JSON.stringify(todolist));
    renderTodos();

} 