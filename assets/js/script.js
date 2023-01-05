let addNewTask = document.getElementById("AddTodoBtn");
let inpt = document.getElementById('AddTodoInpt');
let inptIn = document.getElementById('AddTodoInpt');
let btn = document.getElementById("AddTodoBtn");
let arr = [];
let i = 0;
let inTodoSpawn = document.querySelector('.inTodoSpawn');
let validation = document.getElementsByClassName("valid");





function addDiv() {
    let date = document.createElement("input");
    let textAreaEdit = document.createElement("textarea");
    /** CREATE TODO */
    let inTodoSpawn = document.createElement("div");
    inTodoSpawn.className = ('inTodoSpawn');
    document.querySelector('.toDoSpawn').appendChild(inTodoSpawn);
    let pIntodo = document.createElement("p");
    inTodoSpawn.appendChild(pIntodo);
    let inpt = document.getElementById('AddTodoInpt').value;
    pIntodo.textContent = (inpt);
    let id = spaceTraitement(true, inpt);
    pIntodo.id = (id);
    arr.push(inTodoSpawn);
    console.log(arr)

    /** ADD ITEMS */
    let blockImg = document.createElement('div');
    blockImg.id = ('imgBlock');
    inTodoSpawn.appendChild(blockImg);
    let valid = document.createElement('img');
    let chevron = document.createElement('img');
    let trash = document.createElement('img');
    arr.push(trash.value);
    valid.src = 'assets/img/validds.png';
    valid.style.backgroundColor = "none";
    chevron.src = 'assets/img/chevron.png';
    trash.src = 'assets/img/trash.png';
    trash.id = "trash";
    blockImg.appendChild(valid);
    blockImg.appendChild(chevron);
    blockImg.appendChild(trash);
    date.classList.add("none");
    textAreaEdit.classList.add("none");

    /** ITEMS FUNCTIONS */
    valid.addEventListener('click', function () {
        valid.classList.toggle('valid');
    })
    trash.addEventListener('click', function () {
        inTodoSpawn.remove();
    })
    chevron.addEventListener("click", function () {
        inTodoSpawn.classList.toggle('anim');
        chevron.classList.toggle('rotateChevron');
        console.log(inTodoSpawn)
        let value = pIntodo.id;
        if (inTodoSpawn.classList.contains('anim')) {
            inTodoSpawn.appendChild(date);
            inTodoSpawn.appendChild(textAreaEdit);
            date.setAttribute("type", "date");
            let p = document.querySelector('#' + value);
            let textarea = document.createElement("textarea");
            textarea.value = spaceTraitement(false, value);
            textarea.id = value;
            inTodoSpawn.replaceChild(textarea, p);
            textarea.classList.add("editText")
            date.classList.replace("none", "apparition");
            textAreaEdit.classList.replace("none", "textAreaEdit");
            
        } else {
            let textarea = document.querySelector('#' + value);
            let p = document.createElement("p");
            let newValue = document.getElementById(value).value;
            pIntodo.id = spaceTraitement(true, newValue);
            p.textContent = (newValue);
            p.id = spaceTraitement(true, newValue);
            inTodoSpawn.replaceChild(p, textarea);
            date.classList.replace("apparition", "none");
            textAreaEdit.classList.replace("textAreaEdit", "none");
            
        }
    })


};
function spaceTraitement(a, str) {
    let phraseFinale;
    phraseFinale = str.split('')
    if (a) {
        for (x = 0; x < phraseFinale.length; x++) {
            if (phraseFinale[x] === " ") {
                phraseFinale[x] = "_";
            }
        }
    } else {
        for (x = 0; x < phraseFinale.length; x++) {
            if (phraseFinale[x] === "_") {
                phraseFinale[x] = " ";
            }
        }
    }
    phraseFinale = phraseFinale.join('')
    return phraseFinale
}

btn.addEventListener('click', addDiv);







