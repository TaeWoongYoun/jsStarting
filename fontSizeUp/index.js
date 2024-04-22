document.getElementById('btn').addEventListener("click", function(){
    document.getElementById('text').style.fontSize = (parseInt(window.getComputedStyle(document.getElementById('text'), null).getPropertyValue('font-size')) + 5) + 'px';
})

document.getElementById('btn2').addEventListener("click", function(){
    document.getElementById('text').style.fontSize = (parseInt(window.getComputedStyle(document.getElementById('text'), null).getPropertyValue('font-size')) - 5) + 'px';
})