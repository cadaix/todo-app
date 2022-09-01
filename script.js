
let DOM_btn = document.querySelector('#liveToastBtn')
DOM_btn.onclick = function(){ alert('blah'); };
DOM_btn.addEventListener('click',formHandler);


const toast = ""

function formHandler(event){
    event.preventDefault()
    const text = document.querySelector("#task")
    addItem(text.value)
    if (text.value) {
        addItem(text.value)
        text.value = ""
    }else { console.log("Oluşturacağınız not en az 3 harften oluşmalıdır") }
}

let DOM_ul = document.querySelector("#list")
const addItem = (info) => {
    let li_Dom = document.createElement('li')
    li_Dom.innerHTML = `${info}`
    DOM_ul.append(li_Dom)
}