import Giiker from './giiker'

const button = document.querySelector('.connect')
const sequence = document.querySelector('.sequence')
const sounds = document.querySelector('.sounds')

const cubeSounds = {
  'Kick 1': { sound: new Howl({ src: ['samples/Kick.wav'] }) },
  'Kick 2': { sound: new Howl({ src: ['samples/Kick Accent.wav'] }) },
  'Snare 1': { sound: new Howl({ src: ['samples/Snare.wav'] }) },
  'Snare 2': { sound: new Howl({ src: ['samples/Snare Accent.wav'] }) },
  Rim: { sound: new Howl({ src: ['samples/Rim Shot.wav'] }) },
  'Hi-hat 1': { sound: new Howl({ src: ['samples/HiHat.wav'] }) },
  'Hi-hat 2': { sound: new Howl({ src: ['samples/HiHat Accent.wav'] }) },
  'Hi-hat 3': { sound: new Howl({ src: ['samples/HiHat Metal.wav'] }) },
  Cymbal: { sound: new Howl({ src: ['samples/Cymbal.wav'] }) },
  'Bongo high': { sound: new Howl({ src: ['samples/Bongo High.wav'] }) },
  'Bongo low': { sound: new Howl({ src: ['samples/Bongo Low.wav'] }) },
  'Conga low': { sound: new Howl({ src: ['samples/Conga Low.wav'] }) },
  Cowbell: { sound: new Howl({ src: ['samples/Cowbell.wav'] }) },
  'Tamb 1': { sound: new Howl({ src: ['samples/Tamb 1.wav'] }) },
  'Tamb 2': { sound: new Howl({ src: ['samples/Tamb 2.wav'] }) }
}

const moveMap = {
  R: 'Kick 1',
  "R'": 'Kick 2',
  L: 'Snare 1',
  "L'": 'Snare 2',
  U: 'Rim',
  "U'": 'Hi-hat 1',
  D: 'Hi-hat 2',
  "D'": 'Hi-hat 3',
  F: 'Cymbal',
  "F'": 'Bongo high',
  B: 'Bongo low',
  "B'": 'Conga low'
}

const playSound = move => {
  cubeSounds[moveMap[move]].sound.play()
}

Object.keys(moveMap).map(moveName => {
  const item = document.createElement('li')
  item.classList.add(moveName.replace("'", '-'))
  item.innerHTML = `<b>${moveName}</b>: ${moveMap[moveName]}`
  sounds.appendChild(item)
})

button.addEventListener('click', async () => {
  button.disabled = true
  const giiker = await Giiker.connect()
  button.textContent = 'Connected'

  giiker.on('move', move => {
    const side = document.querySelector(`.${move.notation.replace("'", '-')}`)

    sequence.innerHTML += ` ${move.notation}`
    side.classList.add('highlight')
    playSound(move.notation)

    setTimeout(() => {
      side.classList.remove('highlight')
    }, 500)
  })
})
