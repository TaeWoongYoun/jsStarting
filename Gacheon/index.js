let add = document.getElementById('make')
let remove = document.getElementById('remove')
let new_p = document.querySelector('.main')

add.addEventListener('click', e=>{
    e.preventDefault();
    let element = document.createElement('p');
    element.innerHTML = "새로운 텍스트 입니다."
    new_p.appendChild(element);
})

remove.addEventListener('click', e=>{ 
    new_p.removeChild(new_p.lastChild);
})