import GiiKER from './giiker'

const button = document.querySelector('button')
const textarea = document.querySelector('textarea')

// button.style.width = '100%'
// button.style.height = '44px'
// button.style.marginBottom = '8px'
// textarea.style.boxSizing = 'border-box'
// textarea.style.width = '100%'
// textarea.style.height = 'calc(20vh - 48px - 24px)'
// textarea.style.fontSize = '32px'

button.addEventListener('click', async () => {
  button.disabled = true
  const giiker = await GiiKER.connect()
  button.textContent = 'Connected'
  giiker.on('move', move => {
    // const currentTextareaValue = textarea.value
    textarea.value += ` ${move.notation}`
    // div.setAttribute('data-config', `alg=${(currentTextareaValue += ` ${move.notation}`)}| colored=U*| flags=showalg|hover=none`)
  })
})
