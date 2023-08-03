let botonpersonalizado = document.getElementById("botonpersonalizado")
let botonblanco = document.getElementById("botonblanco")
let modoPersonalizado = JSON.parse(localStorage.getItem("modoPersonalizado"))

if(modoPersonalizado == true){
document.body.classList.add("Personalizar")
}
else{
    document.body.classList.remove("Personalizar")
}

botonpersonalizado.addEventListener("click", ()=>{
    document.body.classList.add("Personalizar")

   localStorage.setItem("modoPersonalizado", true)
})

botonblanco.addEventListener("click", ()=>{
    document.body.classList.remove("Personalizar")
    localStorage.setItem("modoPersonalizado", false)
})