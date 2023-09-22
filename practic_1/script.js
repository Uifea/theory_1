let modalWindow = document.querySelector(".modal");
let modalWindowBody = document.querySelector(".modal__body");
let buttonOpenModal = document.querySelector(".main__btn");
let buttonCloseModal = document.querySelector(".modal__close");


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

