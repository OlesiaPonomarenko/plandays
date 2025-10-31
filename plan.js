const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDo = document.querySelector('.toDo');

btn.addEventListener('click', function(){
        
    if (inputField.value.trim().length === 0) return;{

    const item = document.createElement('li');
    item.innerText =inputField.value;
    item.classList.add('toDoAddet');
    inputField.value = '';
    toDo.appendChild(item);
    
    item.addEventListener('click', function(){
        item.classList.add('newClass');
    })

    item.addEventListener('dblclick', function() {
        toDo.removeChild(item);
    })

}
})
