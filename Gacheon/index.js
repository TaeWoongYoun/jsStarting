let add = document.getElementById('make')
let remove = document.getElementById('remove')
let main = document.querySelector('.main')

add.addEventListener('click', e=>{
    e.preventDefault();
    let element = document.createElement('p');
    element.innerHTML = "새로운 텍스트 입니다."
    main.appendChild(element);
})

remove.addEventListener('click', e=>{ 
    main.removeChild(new_p.lastChild);
})