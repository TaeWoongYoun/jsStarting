const data = [
    {id:1, name:'파이리', title:'Web Developer', url:'image/red.png', text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat enim consectetur aliquam sint animi provident. Saepe ab, est nihil cumque cupiditate impedit nobis temporibus deleniti laboriosam exercitationem fuga aperiam pariatur!'},
    {id:2, name:'팽도리', title:'Backend Developer', url:'image/blue.png', text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur tempora hic totam atque quisquam ad doloribus autem facilis aliquid doloremque provident porro, commodi rem. Perferendis voluptates autem tenetur eius tempora.'},
    {id:3, name:'모부기', title:'Frontend Developer', url:'image/green.png', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ratione, nam obcaecati iste placeat laborum nesciunt corporis ea tenetur sint ut et sit molestiae quod repellendus neque porro tempore dolorum?'},
    {id:4, name:'찌르꼬', title:'Web Publisher', url:'image/gray.png', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolore consectetur! Quidem voluptatibus culpa quae nemo. Molestiae nostrum a sunt. Consequuntur dolore molestiae vel debitis necessitatibus quidem? Deserunt, cupiditate quasi!'}
]
const sliderContainer = document.querySelector('.slider');
function slider(slide){
    slide.forEach(element => {
        const imgSlide = `
        <div class="card">
            <div class="profile"><img src="${element.url}" alt=""></div>
            <h2>${element.name}</h2>
            <h3>${element.title}</h3>
            <p>${element.text}</p>
        </div>`;
        document.querySelector('.slider').insertAdjacentHTML('beforeend', imgSlide);
    });
}

slider(data)

const slideWidth = sliderContainer.clientWidth;
let currentIndex = 0;


function goToSlide(index) {
    if (index < 0 || index >= data.length) return;

    const offset = -index * slideWidth;
    sliderContainer.style.transform = `translateX(${offset}px)`;
    currentIndex = index;
}

document.querySelector('.prev').addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});