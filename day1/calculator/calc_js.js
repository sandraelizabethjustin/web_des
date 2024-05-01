function buttonclick(val){
    document.getElementById("screen").value+=val;
}
function clearfield(){
    document.getElementById("screen").value="";
}
function equalClick(){
    var text=document.getElementById("screen").value
    console.log(text)
    var result=eval(text)
    console.log(result)
    document.getElementById("screen").value=result
}
