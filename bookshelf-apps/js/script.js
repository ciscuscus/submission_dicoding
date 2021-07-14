document.addEventListener("DOMContentLoaded", function(){
    const formInput = document.getElementById("inputBook");

    formInput.addEventListener("submit", function(event) {
        event.preventDefault();
        addBook();
    });
})