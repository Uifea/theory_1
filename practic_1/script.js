let modalWindow = document.querySelector(".modal");
let modalWindowBody = document.querySelector(".modal__body");
let buttonOpenModal = document.querySelector(".main__btn");
let buttonCloseModal = document.querySelector(".modal__close");

let image = document.getElementById("logo-image");
let file = document.getElementById("logo-input");
let cancelUpload = document.querySelector(".modal__logo-close");


//Функция по закрыванию и открыванию попапа
let toggleModal = function () {
    modalWindow.classList.toggle("hide");
}

//Закрыть попап
buttonCloseModal.addEventListener('click', () => {
    toggleModal();
});


//Закрыть попа через ескейп
document.addEventListener("keydown", (e) => {
    if (e.code === 'Escape' && !modalWindow.classList.contains('hide')) {
        toggleModal();
    }
})

//Вызов попапа
buttonOpenModal.addEventListener('click', () => {
    toggleModal();
})


file.addEventListener('change', function(){
    image.src = URL.createObjectURL(file.files[0]);
    image.style.display = "block";
});

cancelUpload.addEventListener('click', function() {
    image.src = "img/Ellipse 44.png";
})