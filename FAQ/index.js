document.querySelectorAll('.accordion').forEach((accordion) => {
    accordion.querySelector('.icon').addEventListener('click', function(){
        accordion.nextElementSibling.style.transform = 'translateY(100px)';
        accordion.querySelector('.icon2').style.display = 'block';
        accordion.querySelector('.icon').style.display = 'none';
    });

    accordion.querySelector('.icon2').addEventListener('click', function(){
        accordion.nextElementSibling.style.transform = 'translateY(0px)';
        accordion.querySelector('.icon').style.display = 'block';
        accordion.querySelector('.icon2').style.display = 'none';
    });
});