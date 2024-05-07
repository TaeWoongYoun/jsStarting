let add = document.getElementById('make')
let remove = document.getElementById('remove')

add.addEventListener('click', function(){
    let element = document.createElement('p');
    let addText = document.createTextNode('텍스트가 추가되었습니다.');
    element.appendChild(addText);
    document.body.append(element);
})

remove.addEventListener('click', function(){ 
    let element = document.createElement('p');
    document.remove(element);
})