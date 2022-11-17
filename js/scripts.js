let btn = document.getElementById("btn")

btn.addEventListener("click", aletra)
function aletra() {
    Swal.fire({
        title: 'Bienvenido',
        text: 'Disfrute nuestra pagina',
        icon: 'success',
        confirmButtonText: 'Cool'
    })
}


