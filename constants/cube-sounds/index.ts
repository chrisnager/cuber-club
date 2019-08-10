import { Howl } from 'howler'

export default {
  'Pack A': {
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
}
