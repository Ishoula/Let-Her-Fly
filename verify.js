document.getElementById("ver-form").addEventListener('submit', function(event){
    event.preventDefault()
    const isValid=verifyForm()
   if(isValid){
    alert("You can now create a new password")
    window.location.href= "reset.html"
   }
   
})
function verifyForm(){
    let isValid=true
    const code=document.getElementById("code")
    if(!code.value.trim()){
        code.classList.add("invalid")
        code.nextElementSibling.style.display="block"
        isValid=false
    }
    else{
        code.classList.remove("invalid")
        code.nextElementSibling.style.display="none"
    }
    return isValid
}
