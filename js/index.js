//Header active menu desplegable

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".hamburguesa__icon")
    const menuList = document.querySelector(".hamburguesa__list")

    // Función para abrir y cerrar el menú hamburguesa
    const toggleMenu = () => {
        menuList.classList.toggle("active")
    };

    // Abrir/cerrar el menú cuando se hace clic en el icono
    menuIcon.addEventListener("click", toggleMenu)

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", (e) => {
        if (!menuList.contains(e.target) && !menuIcon.contains(e.target)) {
            menuList.classList.remove("active")
        }
    })
})

// Desplegable menu hamburguesa header 

document.addEventListener("DOMContentLoaded", function() {

    const bloqueDesplegable = document.querySelectorAll('.hamburguesa__bloque')
    const titleDesplegable = document.querySelectorAll('.hamburguesa_title')

    titleDesplegable.forEach( ( cadaTitleDesplegable , i )=>{
        titleDesplegable[i].addEventListener('click', ()=>{

            if (bloqueDesplegable[i].classList.contains('activo')) {
                bloqueDesplegable[i].classList.remove('activo')
            } else {
                bloqueDesplegable.forEach( ( cadaBloqueDesplegable , i) => {
                    bloqueDesplegable[i].classList.remove('activo')

                })
                bloqueDesplegable[i].classList.add('activo')
            }
        })
    }) 
})

// Header close menu desplegable

const closeBoton = document.getElementById("closeMenu")
const menu = document.getElementById("hamburguesaMenu")

closeBoton.addEventListener('click' , () => {
    menu.classList.remove('active')
})


// Desplegable consejos


document.addEventListener("DOMContentLoaded", function() {

    const bloque = document.querySelectorAll('.consejos__card')
    const title = document.querySelectorAll('.consejos__card_title')

    title.forEach( ( cadaTitle , i )=>{
        title[i].addEventListener('click', ()=>{

            if (bloque[i].classList.contains('activo')) {
                bloque[i].classList.remove('activo')
            } else {
                bloque.forEach( ( cadaBloque , i) => {
                    bloque[i].classList.remove('activo')

                })

                bloque[i].classList.add('activo')
            }
        })
    }) 
})

// Pop up newsletter 

document.addEventListener("DOMContentLoaded", function() {

    const popup = document.querySelector('.newsletter__popup')
    const subscribeButton = document.getElementById("popupButtom");
    const closePopup = document.getElementById("popupClose");

    subscribeButton.addEventListener("click", function() {
    popup.style.display = "flex"
    
    });

    closePopup.addEventListener("click", function() {
    popup.style.display = "none"
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none"
        }
    });
})


// Quienes somos

document.addEventListener("DOMContentLoaded", function() {
    const img1 = document.querySelector('.somos__img1')
    const img2 = document.querySelector('.somos__img2')
    const text1 = document.querySelector('.somos__text_1')
    const text2 = document.querySelector('.somos__text_2')

    // Función para manejar el clic en la imagen 1
    img1.addEventListener('click', function() {
        img1.classList.add('somos__active')
        img1.classList.remove('somos__noactive')
        img2.classList.remove('somos__active')
        img2.classList.add('somos__noactive')

        text1.classList.add('active')
        text2.classList.remove('active')
    })

    // Función para manejar el clic en la imagen 2
    img2.addEventListener('click', function() {
        img2.classList.add('somos__active')
        img2.classList.remove('somos__noactive')
        img1.classList.remove('somos__active')
        img1.classList.add('somos__noactive')

        text2.classList.add('active')
        text1.classList.remove('active')
    })
})

// Carrusel 

const slider = document.querySelector('.carrusel__contenido')

function goToSlide (slideNumber) {
    if (slideNumber < 1 || slideNumber > 3) {
        return
}

currentSlide = slideNumber;
  slider.style.transform = `translateX(-${(currentSlide - 1) * 100}vw)`
}

const boton1 = document.querySelector('.boton_carrusel1')
const boton2 = document.querySelector('.boton_carrusel2')
const boton3 = document.querySelector('.boton_carrusel3')

boton1.addEventListener('click', () => goToSlide(1))
boton2.addEventListener('click', () => goToSlide(2))
boton3.addEventListener('click', () => goToSlide(3))



