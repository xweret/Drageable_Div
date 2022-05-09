
const wrapper = document.querySelector(".wrapper"), 
header = wrapper.querySelector("header");

function onDrag({movementX, movementY}) {
    let getStyle = window.getComputedStyle(wrapper);
    let left = parseInt(getStyle.left);// esto obtiene los valores de la izquierda del contenedor y pasa un string 
    let top = parseInt(getStyle).top; //esto obtiene los valores del top del contenedor y pasa un string 
    wrapper.style.left = `${left + movementX}px`;
    wrapper.style.top = `${top + movementY}px`;
}

header.addEventListener("mousedown", ()=>{
    header.classList.add("active");
    header.addEventListener("mousemove", onDrag);
});

header.addEventListener("mouseup", ()=>{
    header.classList.remove("active");
    header.removeEventListener("mousemove", onDrag);
});
