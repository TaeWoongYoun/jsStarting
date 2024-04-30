const item = document.querySelector('.item');
const box = document.getElementById("box");

// 드래그 시작 
// item.addEventListener('dragstart', (e) =>{
//     console.log("드래그 이벤트 확인 메시지");
// })

// 드래그 하는 동안
// item.addEventListener('drag', (e) =>{
//     console.log("드래그 하는 중")
// })

// 박스에 드래드 되면
// box.addEventListener('dragenter', (e) =>{
//     console.log("박스에 드래그 됨")
// })

box.addEventListener('dragover', (e) =>{
    console.log("박스에 드래그 중")
})