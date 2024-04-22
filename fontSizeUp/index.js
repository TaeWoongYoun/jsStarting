// for(var i = 0; i<i+1; i++){
//     console.log(i);
// }

document.getElementById('btn').addEventListener("click", function(){
    document.getElementById('text').style.fontSize = (parseInt(window.getComputedStyle(document.getElementById('text'), null).getPropertyValue('font-size')) + 5) + 'px';
})

document.getElementById('btn2').addEventListener("click", function(){
    document.getElementById('text').style.fontSize = (parseInt(window.getComputedStyle(document.getElementById('text'), null).getPropertyValue('font-size')) - 5) + 'px';
})