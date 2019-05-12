const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

    const TODOS_LS = "toDos";

    //할 일 항목이 많아질 수 있기 때문에 array로 만듬
    const toDos = [];

    function saveToDos() {              //object를 string으로 바꿔주기위해
        localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    }

    function paintToDo(text) {
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const span = document.createElement("span");
        const newId = toDos.length + 1;
        delBtn.innerText = "❌";
        span.innerText = text
        //뭔가를 father element 안에 넣는 것
        li.appendChild(span);
        li.appendChild(delBtn);
        li.id = newId;
        toDoList.appendChild(li);
        const toDoObj = {
            text: text,
            id: newId
        };
        toDos.push(toDoObj);
        //push먼저하고 saveToDos 불러와야됨
        saveToDos();
    }

    function handleSubmit(event) {
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        //todo를 생성하고 빈칸만들고 싶을때
        toDoInput.value = "";
    }
    
    function loadToDos() {
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if(loadedToDos !== null) {
            const parsedToDos = JSON.parse(loadedToDos);
                        //함수를 실행하는데 array에 담겨있는 것들을 
                        //각각에 한번씩 함수를 실행시켜 주는것
            parsedToDos.forEach(function(toDo){
                paintToDo(toDo.text);
            });
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
