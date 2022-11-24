let addNewTask = document.getElementById("AddTodoBtn");
let inpt = document.getElementById('AddTodoInpt').value;
let inptIn = document.getElementById('AddTodoInpt');
let btn =document.getElementById ("AddTodoBtn");
let arr = [];

let inTodoSpawn = document.querySelector('.inTodoSpawn');
let validation = document.getElementsByClassName("valid");


function addDiv(){
        let inTodoSpawn = document.createElement("div");
        inTodoSpawn.className = ('inTodoSpawn');
        document.querySelector('.toDoSpawn').appendChild(inTodoSpawn);
        let pIntodo = document.createElement("p");
        inTodoSpawn.appendChild(pIntodo);
        let inpt = document.getElementById('AddTodoInpt').value;
        pIntodo.textContent = (inpt);
        console.log(arr)
        arr.push(inTodoSpawn);
        let blockImg = document.createElement('div');
        blockImg.id = ('imgBlock');
        inTodoSpawn.appendChild(blockImg);
        let valid = document.createElement('img');
        let edit = document.createElement('img');
        let trash = document.createElement('img');
        arr.push(trash.value);
        valid.src = 'assets/img/validds.png';
        valid.style.backgroundColor = "none";
        edit.src = 'assets/img/edit.png';
        trash.src = 'assets/img/trash.png';
        trash.id ="trash";
        blockImg.appendChild(valid);
        blockImg.appendChild(edit);
        blockImg.appendChild(trash);
        valid.addEventListener('click', function(){
            valid.classList.toggle('valid');
        })
        trash.addEventListener('click', function(){
            inTodoSpawn.remove();
        })
        edit.addEventListener("click", function(){
            inTodoSpawn.classList.toggle('anim');
        })
};







