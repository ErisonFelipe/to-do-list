const button = document.getElementById("add");
const tarefa = document.getElementById("tarefa");
const lista = document.getElementById("lista");

button.addEventListener("click", ()=>{
    var result = tarefa.value;

    lista.innerHTML = `<input type="checkbox">
        ${result}
    </input>`
    
});

const checkbox = document.getElementsByClassName("check");

checkbox.addEventListener("click", ()=>{
    checkbox.style.color = "#f00";
})

