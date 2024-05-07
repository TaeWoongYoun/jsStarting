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


// 박스 드래그해서 옮기기
// const draggables = document.querySelectorAll(".draggable");
// const containers = document.querySelectorAll(".container");

// draggables.forEach(draggable => {
//     draggable.addEventListener("dragstart", ()=> {
//         draggable.classList.add('dragging');
//     });

//     draggable.addEventListener("dragend", ()=>{
//         draggable.classList.remove('dragging');
//     })
// })

// containers.forEach(container => {
//     container.addEventListener("dragover", e => {
//         e.preventDefault();
//         const afterElement = getDragAfterElement(container, e.clientX);
//         const draggable = document.querySelector('.dragging');
//         if (afterElement === undefined) {
//             container.appendChild(draggable);
//         } else {
//             container.insertBefore(draggable, afterElement);
//         }
//     })
// })

// function getDragAfterElement(container, x) {
//     const draggableElements = [
//         ...container.querySelectorAll(".draggable")
//     ];

//     return draggableElements.reduce(
//         (closest, child) => {
//             const box = child.getBoundingClientRect();
//             const offset = x - box.left - box.width / 2;
//             if (offset < 0 && closest.offset < offset) {
//                 return {offset: offset, element: child};
//             } else {
//                 return closest;
//             }
//         },
//         {offset : Number.NEGATIVE_INFINITY},
//     ).element;
// }