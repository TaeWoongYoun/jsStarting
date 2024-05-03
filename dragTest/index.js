const item = document.querySelector('.item');
const box = document.getElementById("box");
const main = document.getElementById('main');

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

// 박스에 드래그 중이면
// box.addEventListener('dragover', (e) =>{
//     console.log("박스에 드래그 중")
// })

//드롭 이벤트 테스트
// main.addEventListener('dragover', (e) =>{
//     e.preventDefault();
// })
// main.addEventListener('drop', (e) => {
//     e.preventDefault();
//     console.log('1번 박스에 이미지 드롭')
// })
// box.addEventListener('dragover', (e) =>{
//     e.preventDefault();
// })
// box.addEventListener('drop', (e) => {
//     e.preventDefault();
//     console.log('2번 박스에 이미지 드롭')
// })

// 드래그가 끝나면 발생하는 이벤트
item.addEventListener('dragend' , (e) => {
    console.log('드래그가 끝나면 나오는 이벤트')
})