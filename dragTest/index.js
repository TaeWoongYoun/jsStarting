const item = document.querySelector('.item');

// 드래그 시작 
// item.addEventListener('dragstart', (e) =>{
//     console.log("드래그 이벤트 확인 메시지");
// })

// 드래그 하는 동안
item.addEventListener('drag', (e) =>{
    console.log("드래그 하는 중")
})