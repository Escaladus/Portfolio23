const cols = document.querySelectorAll('.col')
function generateRandomColor() {
    //RGB
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for(let i = 0; i < 6; i++){
        color +=hexCodes[Math.floor(Math.random()*hexCodes.length)]
    }
    return '#' + color
}
function setRanfdomColors() {
    cols.forEach(col => {
        col.style.background = generateRandomColor()
    })
}

setRanfdomColors()