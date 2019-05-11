const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

    const TODOS_LS = "toDos";

    function paintToDo(text) {
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        delBtn.innerText = "❌";
        const span = document.createElement("span");
        span.innerText = text
        //뭔가를 father element 안에 넣는 것
        li.appendChild(span);
        li.appendChild(delBtn);
        toDoList.appendChild(li);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        //todo를 생성하고 삭제하고 싶을때
        toDoInput.value = "";
    }
    
    function loadToDos() {
        const toDos = localStorage.getItem(TODOS_LS);
        if(toDos !== null) {
        }
       
        // if(toDos === null) {
        //     //이 경우일 경우 form은 항상 showing이 되기 때문에 
        //     //딱히 건드릴것이 없음
        // } else {

        // }
    }
    
    function init() {
        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit)
    }

    init();
