//greeting : 안부의 말

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

    //name을 저장하기 위해서
    function saveName(text) {
        localStorage.setItem(USER_LS, text);
    }

    //form을 제출하는 event가 발생하면 event가 계속 올라간다,
    //document까지
    function handleSubmit(event) {
        event.preventDefault();
        const currentValue = input.value;
        //text를 필요로함
        paintGreeting(currentValue);
        saveName(currentValue);
    }

    function askForName() {
        form.classList.add(SHOWING_CN);
        form.addEventListener("submit" , handleSubmit);
    }

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text} !`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        //she is not
        askForName();
    }else {
        //she is
        paintGreeting(currentUser);
    }
}

function init() {
loadName();
}

init();