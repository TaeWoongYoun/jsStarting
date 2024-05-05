// // 드래그시 이미지 변경
// const img = document.createElement('img');
//     img.src = 'https://cdn-icons-png.flaticon.com/512/25/25231.png';

// document.getElementById('dragBox').addEventListener('dragstart', (e) =>{
//     e.dataTransfer.setDragImage(img, 100, 100);
// }, false)

// 드롭시 alert알림
// var drop = document.getElementById('drop');
// var drag = document.getElementById('drag');

// drag.addEventListener('dragstart', (e) =>{
//     e.dataTransfer.setData('data', this.innerHTML);
//     e.dataTransfer.dropEffect = 'copy'
// })

// drop.addEventListener('dragover', (e) =>{
//     e.preventDefault(); // 필수
//     e.dataTransfer.dropEffect = 'move';
// });

// drop.addEventListener('drop', (e) => {
//     alert('박스가 드래그 되었습니다.');
// });