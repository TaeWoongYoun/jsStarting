
// 이미지가 담긴 도감
var data = [
    { id: 0, title: "HTML5", brand: "html", photo: "image/pr1.jpg", price: 10000},
    { id: 1, title: "CSS3", brand: "css", photo: "image/pr2.jpg", price: 20000},
    { id: 2, title: "JavaScript", brand: "js", photo: "image/pr3.jpg", price: 30000},
    { id: 3, title: "prthon3", brand: "py", photo: "image/pr4.jpg", price: 40000}
]

function card(products) {
    products.forEach(element => {
        var template = `
        <div class="card" draggable="true">
            <img src="${element.photo}" alt="">
            <div class="textBox">
                <h2>${element.title}</h2>
                <p class="subText">${element.brand}</p>
                <p class="price">가격 : ${element.price}</p>
                <button>담기</button>
            </div>
        </div>`;
        document.querySelector(".content").insertAdjacentHTML('beforeend', template);
    });
}

const imgBox = document.querySelector('.card');

imgBox.addEventListener('dragstart', (e) => {
    console.log('드래그를 시작하면 발생하는 이벤트');
})

card(data)

