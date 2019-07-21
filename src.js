import GiiKER from './giiker'

const button = document.querySelector('button')
const textarea = document.querySelector('textarea')

const cubeSounds = {
  kicka: { sound: new Howl({ src: ['samples/Kick.wav'] }) },
  kickb: { sound: new Howl({ src: ['samples/Kick Accent.wav'] }) },
  snarea: { sound: new Howl({ src: ['samples/Snare.wav'] }) },
  snareb: { sound: new Howl({ src: ['samples/Snare Accent.wav'] }) },
  rim: { sound: new Howl({ src: ['samples/Rim Shot.wav'] }) },
  hihata: { sound: new Howl({ src: ['samples/HiHat.wav'] }) },
  hihatb: { sound: new Howl({ src: ['samples/HiHat Accent.wav'] }) },
  hihatc: { sound: new Howl({ src: ['samples/HiHat Metal.wav'] }) },
  cymbal: { sound: new Howl({ src: ['samples/Cymbal.wav'] }) },
  bongohigh: { sound: new Howl({ src: ['samples/Bongo High.wav'] }) },
  bongolow: { sound: new Howl({ src: ['samples/Bongo Low.wav'] }) },
  congalow: { sound: new Howl({ src: ['samples/Conga Low.wav'] }) },
  cowbell: { sound: new Howl({ src: ['samples/Cowbell.wav'] }) },
  tamb1: { sound: new Howl({ src: ['samples/Tamb 1.wav'] }) },
  tamb2: { sound: new Howl({ src: ['samples/Tamb 2.wav'] }) }
}

const moveMap = {
  R: 'kicka',
  "R'": 'kickb',
  L: 'snarea',
  "L'": 'snareb',
  U: 'rim',
  "U'": 'hihata',
  D: 'hihatb',
  "D'": 'hihatc',
  F: 'cymbal',
  "F'": 'bongohigh',
  B: 'bongolow',
  "B'": 'congalow'
}

const playSound = move => {
  console.log(`Play sound "${move}"`)
  cubeSounds[moveMap[move]].sound.play()
}

button.addEventListener('click', async () => {
  button.disabled = true
  const giiker = await GiiKER.connect()
  button.textContent = 'Connected'
  giiker.on('move', move => {
    // const currentTextareaValue = textarea.value
    textarea.value += ` ${move.notation}`
    playSound(move.notation)
  })
})
