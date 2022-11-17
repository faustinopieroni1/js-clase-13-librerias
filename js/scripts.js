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

//--------------------------------------------

let btn2 = document.getElementById("btn2")

btn2.addEventListener("click", notificacion)

function notificacion() {

   /*  Toastify({
        text: "This is a toast",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast(); */
    
    Toastify({
        text: "Hiciste click",
        className: "info",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();

    /* Toastify({
        text: "This is a toast with offset",
        offset: {
          x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
      }).showToast(); */
}