const panels = document.querySelectorAll(".panel");


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeAction();
        panel.classList.add("active");
    })
})
const removeAction = () => {
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}

