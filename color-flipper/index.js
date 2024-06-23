$(document).ready(function(){
    $(function(){
        const background = document.querySelector('.container');
        const colorText = document.querySelector('.color');
        const btn = document.querySelector('button');

        const colors = [
            { id : 1, name : 'red'},
            { id : 2, name : 'orange'},
            { id : 3, name : 'yellow'},
            { id : 4, name : 'lime'},
            { id : 5, name : 'skyblue'},
            { id : 6, name : 'aquamarine'},
            { id : 7, name : 'coral'},
            { id : 8, name : 'tomato'},
            { id : 9, name : 'springreen'},
            { id : 10, name : 'gray'},
            { id : 11, name : 'pink'}
        ]

        const click = () => {
            const random = Math.floor(Math.random() * colors.length);
            background.style.backgroundColor = colors[random].name;
            colorText.style.color = colors[random].name;
            colorText.textContent = colors[random].name;
        }

        btn.addEventListener('click', click);
    })
})