import './style.css'

const content = document.getElementById('content')

const createButtonWithMessage = () => {
  const container = Object.assign(document.createElement('div'), {
    className: 'container',
    innerHTML: `<button class="button">Hola Plunky</button>`
  })
  content.appendChild(container)

  container.firstChild.addEventListener('click', () => {
    const hola = Object.assign(document.createElement('h1'), {
      innerText: 'Hola Plunky'
    })
    content.appendChild(hola)
    container.firstChild.style.display = 'none' // Oculta el botón después de hacer clic
  })
}

createButtonWithMessage()
