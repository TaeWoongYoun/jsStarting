// document.addEventListener("keydown", function(event){
//     if (event.code === "KeyA"){
            // console.log("A")
//     }
// })


// function textInput(a,b){
//     document.getElementById(a).addEventListener("click", function(){
//         document.getElementById("textarea").value = b;
//     })
// }

function textInput(a,b){
    if (document.getElementById(a)){
        document.getElementById(a).addEventListener("click", function(){
            document.getElementById("textarea").value = b;
        })
    }
}

textInput("one", "1")