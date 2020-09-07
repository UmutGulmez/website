let el = document.querySelector('.avatar')

const height = el.clientHeight
const width = el.clientWidth

for (let element of document.querySelectorAll(".title")) {
    let length = element.textContent.length;
    element.style.setProperty("--length", length);
}

el.addEventListener('mousemove', handleMove)

function handleMove(e) {
    const xVal = e.layerX
    const yVal = e.layerY
    const yRotation = 20 * ((xVal - width / 2) / width)
    const xRotation = -20 * ((yVal - height / 2) / height)
    const string = 'perspective(500px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

    el.style.transform = string
}

el.addEventListener('mouseout', function () {
    el.style.transform = 'perspective(500px) rotateX(0) rotateY(0)'
})

el.addEventListener('mousedown', function () {
    el.style.transform = 'perspective(500px) rotateX(0) rotateY(0)'
})

el.addEventListener('mouseup', function () {
    el.style.transform = 'perspective(500px) rotateX(0) rotateY(0)'
})
