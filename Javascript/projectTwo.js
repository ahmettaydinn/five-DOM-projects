// Variables

let openBtn = document.getElementById("open-btn");
let modalcontainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

// Event Listeners

openBtn.addEventListener("click", function () {
  modalcontainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalcontainer.style.display = "none";
});

window.addEventListener("click", function (event) {

    if(event.target === modalcontainer) {
        modalcontainer.style.display = "none";
    }


});

