const displayGreeting = () => {
    const savedName = localStorage.getItem('username')
    const greeting = document.getElementById('greeting')

    if (savedName) {
        greeting.textContent = `Здравствуйте, ${savedName}!`
    }
}

const saveName = () => {
    const nameInput = document.getElementById('nameInput')
    const name = nameInput.value.trim()

    if (name) {
        localStorage.setItem('username', name)
        displayGreeting()
    }
}

document.getElementById('saveButton').addEventListener('click', saveName)
window.addEventListener('DOMContentLoaded', displayGreeting)