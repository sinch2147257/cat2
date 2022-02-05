console.log("Page is Ready")
var take_input=document.getElementById("email")
var take_input_key=document.getElementById("phoneno")
var save_value=document.getElementById("save_value")
var save_s=document.getElementById("save_s")



save_value.onclick=function(){
    localStorage.setItem(take_input.value,take_input_key.value);
}
