import graphemes_raw from './grapheme.txt'

let graphemes = graphemes_raw.split(/[\r\n]+/)

let phon_const = graphemes[0].split(',')
let phon_vowel = graphemes[1].split(',')

