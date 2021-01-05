let TaskShow = document.getElementById("show_task_box");
TaskShow.addEventListener("click", createElement)

let okBtn = document.getElementById("accept");
okBtn.addEventListener("click", acceptElement)


/*
    Кнопка accept, после нажатия которой создается элемент
*/


function acceptElement(){                               // accept
    let elemObj={
        text: document.task.text.value,
        color: document.task.task_color.value,
        description: document.getElementById("description").value, 
    }

    let taskBox = document.getElementById("task_box");
    let list_task = document.getElementById("list");

    taskBox.style.visibility = "hidden";                // Закрываем всплывающее окно

    let li_task = document.createElement("li");         // Элемент списка
    let li_check = document.createElement("input");     // Наш checkbox
    li_check.type = "checkbox";
    let png = document.createElement("img");
    png.setAttribute("src","more.png");                 // Добавим картинку для просмотра описания
    png.classList.add("png");


    //li_task.addEventListener("click", function(){animate(li_task)});          // Это была анимация при загорании 


    li_task.taskObj = elemObj;  // Присваиваем элементу объект с характеристиками
    let text_list = document.createTextNode(li_task.taskObj.text);  // Текстовое значение в элементе
    let color_list = li_task.taskObj.color;         // Заключим в переменную цвет, занесенный в объекте //Нигде не использовал
    li_task.style.backgroundColor = null;          // Почему нельзя просто присвоить цвет, например, li_task.style.backgroundColor = white?
    
    li_check.addEventListener("change", function(){check(li_task,li_check)})

    li_task.state_property = true;          // Это свойство будет позволять нам на него кликать и включать анимацию
// Если значение true, то можно кликать и включать выделение, анимацию, если null, то анимация заблокирована

    list_task.appendChild(li_task);             // Вставка элементов 
    li_task.appendChild(li_check);
    li_task.appendChild(text_list);
    //li_task.appendChild(png);             // Проблемы с картинкой !!!
}

/*
    Создание    // Вылезает окно по созданию    // Сам процесс создания в кнопке accept
*/
function createElement(){
    let taskBox = document.getElementById("task_box");      
    taskBox.style.visibility = "visible";           // Открываем всплывающее окно
    
    let elemObj={// Пока не используется, потом придумаю что-нибудь
        text: document.task.text.value,
        color: document.task.task_color,

    }
}

/*
    Функция по удалению элемента
*/
function deleteElement(elem, obj){
    // Не дописана
    elem.remove();
}

/*
    Функция с checkbox
*/
function check(li_task,li_check){
    
    if(li_check.checked){
        alert("Дело выполнено")
        li_task.classList.remove("reverse_animated");
        li_task.classList.remove("animated");
        li_task.classList.add("complete_task");
        li_task.classList.add("strikeout");
        li_task.state_property = null;
    }
    else{
        li_task.classList.remove("complete_task");
        li_task.classList.remove("strikeout");
        li_task.state_property = true;
    }
}

function animate(li_task){                                             // Функция по анимации при клике
    if(li_task.state_property){

    if(li_task.classList.contains("animated")){
        li_task.classList.remove("animated");
        li_task.classList.add("reverse_animated");
        li_task.style.backgroundColor = null;       // Удаляем фон
    }
    else{
        li_task.classList.remove("reverse_animated");
        li_task.classList.add("animated");
        li_task.style.backgroundColor = li_task.taskObj.color;
    }
    }
}
