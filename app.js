const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', event => {
    event.preventDefault()
    if(event.code.toLowerCase() === 'space') {
        setRanfdomColors()
    }
})

document.addEventListener('click', event => {
    const type = event.target.dataset.type
    if(type === 'lock') {
        const node = event.target.tagName.toLowerCase() === 'i'
            // jos valittu elementti ei ole "i", valitaan kyseisen elementin lapsen
            ? event.target
            : event.target.children[0]
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    } else if (type === 'copy') {
        copyToClipboard(event.target.textContent)
    }
})
function generateRandomColor() {
    //RGB
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for(let i = 0; i < 6; i++){
        color +=hexCodes[Math.floor(Math.random()*hexCodes.length)]
    }
    return '#' + color
}
function copyToClipboard(text) {
    return  navigator.clipboard.writeText(text)
}
function setRanfdomColors() {
    cols.forEach(col => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const text = col.querySelector('h2')
        const button = col.querySelector('button')
        //const color = chroma.random()
        const color = generateRandomColor()
        if(isLocked) {
            return
        }
        text.textContent = color
        col.style.background = generateRandomColor()
        setTextColor(text, color)
        setTextColor(button, color)
    })
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRanfdomColors()