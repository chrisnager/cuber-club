import { Howl } from 'howler'
import { any } from 'prop-types'

interface CubeSounds {
  'Kick 1': { sound: any }
  'Kick 2': { sound: any }
  'Snare 1': { sound: any }
  'Snare 2': { sound: any }
  Rim: { sound: any }
  'Hi-hat 1': { sound: any }
  'Hi-hat 2': { sound: any }
  'Hi-hat 3': { sound: any }
  Cymbal: { sound: any }
  'Bongo high': { sound: any }
  'Bongo low': { sound: any }
  'Conga low': { sound: any }
  Cowbell: { sound: any }
  'Tamb 1': { sound: any }
  'Tamb 2': { sound: any }
}

const cubeSounds: CubeSounds = {
  'Kick 1': { sound: new Howl({ src: ['/static/samples/Kick.wav'] }) },
  'Kick 2': { sound: new Howl({ src: ['/static/samples/Kick Accent.wav'] }) },
  'Snare 1': { sound: new Howl({ src: ['/static/samples/Snare.wav'] }) },
  'Snare 2': { sound: new Howl({ src: ['/static/samples/Snare Accent.wav'] }) },
  Rim: { sound: new Howl({ src: ['/static/samples/Rim Shot.wav'] }) },
  'Hi-hat 1': { sound: new Howl({ src: ['/static/samples/HiHat.wav'] }) },
  'Hi-hat 2': { sound: new Howl({ src: ['/static/samples/HiHat Accent.wav'] }) },
  'Hi-hat 3': { sound: new Howl({ src: ['/static/samples/HiHat Metal.wav'] }) },
  Cymbal: { sound: new Howl({ src: ['/static/samples/Cymbal.wav'] }) },
  'Bongo high': { sound: new Howl({ src: ['/static/samples/Bongo High.wav'] }) },
  'Bongo low': { sound: new Howl({ src: ['/static/samples/Bongo Low.wav'] }) },
  'Conga low': { sound: new Howl({ src: ['/static/samples/Conga Low.wav'] }) },
  Cowbell: { sound: new Howl({ src: ['/static/samples/Cowbell.wav'] }) },
  'Tamb 1': { sound: new Howl({ src: ['/static/samples/Tamb 1.wav'] }) },
  'Tamb 2': { sound: new Howl({ src: ['/static/samples/Tamb 2.wav'] }) }
}

export default cubeSounds
