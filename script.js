//your code here
document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll(".draggable");

    let draggedElement = null;

    divs.forEach(div => {
        div.setAttribute("draggable", true);

        div.addEventListener("dragstart", function (e) {
            draggedElement = this;
            setTimeout(() => this.style.opacity = "0.5", 0);
        });

        div.addEventListener("dragend", function () {
            setTimeout(() => this.style.opacity = "1", 0);
            draggedElement = null;
        });

        div.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        div.addEventListener("dragenter", function (e) {
            e.preventDefault();
            this.classList.add("hovered");
        });

        div.addEventListener("dragleave", function () {
            this.classList.remove("hovered");
        });

        div.addEventListener("drop", function () {
            this.classList.remove("hovered");

            if (draggedElement && draggedElement !== this) {
                let temp = this.style.backgroundImage;
                this.style.backgroundImage = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = temp;
            }
        });
    });
});
