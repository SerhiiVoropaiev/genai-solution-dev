document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    let modalText = document.getElementById("modal-text");

    // Эта функция из EmailJS отправит данные формы
    emailjs.sendForm('service_snx3yur', 'template_ui9srun', this)
        .then(function () {
            modalText.innerHTML = 'Your request has been successfully sent';
            modal.style.display = "block";
        }, function (error) {
            modalText.innerHTML = 'Sending error: ' + JSON.stringify(error);
            modal.style.display = "block";
        });

    // Когда пользователь кликает на <span> (x), закрыть модальное окно
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Когда пользователь кликает в любое место за пределами модального окна, это также закрывается
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
