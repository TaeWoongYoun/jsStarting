// 드래그시 이미지 변경
const img = document.createElement('img');
    img.src = 'https://cdn-icons-png.flaticon.com/512/25/25231.png';

document.getElementById('dragBox').addEventListener('dragstart', (e) =>{
    e.dataTransfer.setDragImage(img, 100, 100);
}, false)