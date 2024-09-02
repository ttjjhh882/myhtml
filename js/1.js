function clickmybutton(){
    console.log("hello world")
    document.querySelector('h1').textContent="Moi maailma";
}

function addlist(){
    let list = document.getElementById('my-list');
    let text = document.getElementById('text-input');
    let li = document.createElement("li");
    li.textContent=text.value;
    list.appendChild(li);
}